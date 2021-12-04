import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { DisplayComponent } from './display/display.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';



@NgModule({
    declarations: [
        DisplayComponent
    ],
    exports: [
        DisplayComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class ProductModule { }
