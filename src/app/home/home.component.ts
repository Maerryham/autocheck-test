import { Component, OnInit } from '@angular/core';
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
  // cars;
  pagination;

  constructor(private carService: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCarList();
    // this.getCars(1, 3);
    this.route.queryParams.subscribe(params => {
      this.getCars(params.pageNumber || '1', params.pageSize || 24);
    });
  }
  getCarList(): void {
    this.carService.getCarListings().subscribe(
      response => {
        this.carMakeLists = response;
        this.carBrands = this.carMakeLists.makeList;
        // console.log(this.carLists);
      });
  }
  getCars(pageNumber, pageSize): void {
    this.carService.getAllCars(pageNumber, pageSize).subscribe(
      response => {
        this.carResults = response;
        this.carLists = this.carResults.result;
        this.pagination = this.carResults.pagination;
        console.log(this.carLists);
      },
      error => {},
      () => {
      });
  }

}
