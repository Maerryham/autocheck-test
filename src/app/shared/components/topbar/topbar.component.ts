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
  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars(): void {
    this.carService.getCarListings().subscribe(
      response => {
        this.carMakeLists = response;
        this.carLists = this.carMakeLists.makeList;
        this.splitedLists = this.divideArray(this.carLists);
      });
  }
  divideArray(yourArray): any {
    // const yourArray = this.carLists;
    const halfwayThrough = Math.floor(yourArray.length / 2);
// or instead of floor you can use ceil depending on what side gets the extra data

    const arrayFirstHalf = yourArray.slice(0, halfwayThrough);
    const arraySecondHalf = yourArray.slice(halfwayThrough, yourArray.length);
    return {first: arrayFirstHalf, second: arraySecondHalf};
  }

}
