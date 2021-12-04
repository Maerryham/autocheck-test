import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  carLists;
  carMakeLists;
  splitedLists;
  carListArray = [];
  second;
  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.getCars();
    this.getBrandByPageSize(1, 6);
    this.getBrandByPageSize(2, 6);
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
