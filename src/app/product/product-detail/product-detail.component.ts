import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../shared/services/cars.service';
import {ActivatedRoute, Router} from '@angular/router';
import {flexSlider} from 'angular-flexslider';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
car;
carMedia;
carMediaList;
  constructor(private carService: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getCarDetails(id);
      this.getCarMedia(id);
    });
  }
  getCarDetails(id): void {
    this.carService.getCarById(id).subscribe(
      data => {
        this.car = data;
      }
    );
  }
  getCarMedia(id): void {
    this.carService.getCarMediaById(id).subscribe(
      data => {
        this.carMediaList = data;
        this.carMedia = this.carMediaList.carMediaList;
        console.log( this.carMediaList);
      }
    );
  }


}
