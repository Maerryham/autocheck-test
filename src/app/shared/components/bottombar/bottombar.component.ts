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
