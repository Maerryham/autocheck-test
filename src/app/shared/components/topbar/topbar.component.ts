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
  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars(): void {
    this.carService.getCarListings().subscribe(
      response => {
        this.carMakeLists = response;
        this.carLists = this.carMakeLists.makeList;
        // console.log(this.carLists);
      });
  }

}
