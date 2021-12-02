import { Component, OnInit } from '@angular/core';
import {CarsService} from '../shared/services/cars.service';

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

  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.getCars();
    this.getCarBrands();
  }
  getCarBrands(): void {
    this.carService.getCarListings().subscribe(
      response => {
        this.carBrandLists = response;
        this.carBrands = this.carBrandLists.makeList;
      });
  }
  getCars(): void {
    this.carService.getAllCars().subscribe(
      response => {
        this.carResults = response;
        this.carLists = this.carResults.result;
        console.log(this.carResults);
      });
  }
}
