import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../shared/services/cars.service';
import {ActivatedRoute, Router} from '@angular/router';
import {flexSlider} from 'angular-flexslider';
import {StarRatingComponent} from 'ng-starrating';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  car;
  carMedia;
  carMediaList;
  carResults;
  carSimilar;

  constructor(private carService: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getCarDetails(id);
      this.getCarMedia(id);
      this.getCarSimilar();
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
  onRate( $event: { oldValue: number, newValue: number, starRating: StarRatingComponent }): void {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
  getCarSimilar(): any{
    this.carService.getAllCars(1, 3).subscribe(
      data => {
        this.carResults = data;
        this.carSimilar = this.carResults.result;
      }
    );
  }

  // tslint:disable-next-line:typedef
  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
    (event.target as HTMLImageElement).parentElement.parentElement.parentElement.parentElement.style.display = 'none';
    console.log(event.target);
  }

  round(num): number {
    return Math.round(num * 100) / 100;
  }


}
