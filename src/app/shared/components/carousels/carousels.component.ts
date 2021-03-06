import {Component, Input, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css']
})
export class CarouselsComponent implements OnInit {
@Input() images;
@Input() heights;
@Input() link;
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
    (event.target as HTMLImageElement).parentElement.style.display = 'none';
  }

}
