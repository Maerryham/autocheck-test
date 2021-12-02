import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopbarComponent} from './components/topbar/topbar.component';
import {BottombarComponent} from './components/bottombar/bottombar.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [TopbarComponent, BottombarComponent],
  imports: [
    CommonModule, RouterModule,
  ],
  exports: [
    TopbarComponent, BottombarComponent
  ]
})
export class SharedModule { }
