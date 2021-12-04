import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {
  carLists;
  carMakeLists;
  carListArray = [];
  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.getCars();
    this.getBrandByPageSize(1, 6);
  }
  getCars(): void {
    this.carService.getCarListings().subscribe(
      response => {
        this.carMakeLists = response;
        this.carLists = this.carMakeLists.makeList;
      });
  }
  getBrandByPageSize(pageNumber, pageSize): any {
    this.carService.getCarListings(pageNumber, pageSize).subscribe(
      response => {
        const carBrands = response;
        this.carListArray.push(carBrands.makeList);
        // console.log(this.carListArray);
      });
  }

}
