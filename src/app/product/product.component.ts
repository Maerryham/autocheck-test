import { Component, OnInit } from '@angular/core';
import {CarsService} from '../shared/services/cars.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  carLists;
  carResults;
  carBrandLists;
  carBrands;
  pagination;
  validCars;

  constructor(private carService: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.getCars();
    this.route.queryParams.subscribe(params => {
      this.getCars(params.pageNumber || '1', params.pageSize || 24);
    });
    this.getCarBrands();
  }
  getCarBrands(): void {
    this.carService.getCarListings().subscribe(
      response => {
        this.carBrandLists = response;
        this.carBrands = this.carBrandLists.makeList;
      });
  }
  getCars(pageNumber, pageSize): void {
    this.carService.getAllCars(pageNumber, pageSize).subscribe(
      response => {
        this.carResults = response;
        this.carLists = this.carResults.result;
        this.pagination = this.carResults.pagination;
      },
      error => {},
      async () => {
        try{
          this.validCars = await this.deleteCarUnavailable(this.carLists);
        }catch (e) {
          console.log(e);
        }
      });
  }
  async deleteCarUnavailable(carArray): Promise<any> {
    carArray.forEach((el, i ) =>  (el.imageUrl === '') ? carArray.splice([i], 1) : carArray );
    return await carArray;
  }
  public onlyAvailableImages(arrayOfCars): any {
    return arrayOfCars.map(async (carThatExist, i) => {
      // Check if the car image exist;
      // if yes render

      try {
        const check = await this.carService.readFile(arrayOfCars.imageUrl);
        if (check) {
          carThatExist = arrayOfCars;
          // console.log(carThatExist);
        }
      }catch (error) {
        // error from the rejected promise should get caught here
        console.log(error);
      }
      return carThatExist;
    });
  }



  stateFileExist(urlToFile): boolean {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();

    // @ts-ignore
    if (xhr.status === '404') {
      return false;
    } else {
      return true;
    }
  }
}
