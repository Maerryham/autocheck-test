import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopbarComponent} from './components/topbar/topbar.component';
import {BottombarComponent} from './components/bottombar/bottombar.component';
import {RouterModule} from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CarouselsComponent } from './components/carousels/carousels.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [TopbarComponent, BottombarComponent, PaginationComponent, CarouselsComponent],
  imports: [
    CommonModule, RouterModule, NgbCarouselModule,
  ],
  exports: [
    TopbarComponent, BottombarComponent, PaginationComponent, CarouselsComponent
  ]
})
export class SharedModule { }
