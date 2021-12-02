import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../shared/services/cars.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
car;
  constructor(private carService: CarsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getCarDetails(id);
      // this.getJobBillingDetails(id);
    });
  }
  getCarDetails(id): void {
    this.carService.getCarById(id).subscribe(
      data => {
        this.car = data;
        console.log( this.car);
      }
    );
  }

}
