import {Component, Input, OnInit} from '@angular/core';
import {CarsService} from '../../shared/services/cars.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() carLists;
  @Input() carBrands;
  @Input() pagination;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.carLists);
  }
  // tslint:disable-next-line:typedef
  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
    (event.target as HTMLImageElement).parentElement.parentElement.parentElement.parentElement.style.display = 'none';
    console.log(event.target);
  }
}
