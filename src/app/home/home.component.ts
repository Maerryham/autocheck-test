import {Component, OnInit} from '@angular/core';
import {CarsService} from '../shared/services/cars.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carLists;
  carBrands;
  carMakeLists;
  carResults;
  carSlider;
  // cars;
  pagination;

  constructor(private carService: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarList();
    this.getSliderCars();
    this.route.queryParams.subscribe(params => {
      this.getCars(params.pageNumber || '1', params.pageSize || 24);
    });
  }
  getCarList(): void {
    this.carService.getCarListings().subscribe(
      response => {
        this.carMakeLists = response;
        this.carBrands = this.carMakeLists.makeList;
      });
  }
  getSliderCars(): any{
    this.carService.getAllCars(Math.floor(Math.random() * 100), 6).subscribe(
      data => {
        this.carSlider = data.result;
        console.log(this.carSlider);
      }
    );
  }
  getCars(pageNumber, pageSize): void {
    this.carService.getAllCars(pageNumber, pageSize).subscribe(
      response => {
        this.carResults = response;
        this.carLists = this.carResults.result;
        this.pagination = this.carResults.pagination;
      });
  }

}
