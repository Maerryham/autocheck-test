import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopbarComponent} from './components/topbar/topbar.component';
import {BottombarComponent} from './components/bottombar/bottombar.component';
import {RouterModule} from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [TopbarComponent, BottombarComponent, PaginationComponent],
  imports: [
    CommonModule, RouterModule,
  ],
    exports: [
        TopbarComponent, BottombarComponent, PaginationComponent
    ]
})
export class SharedModule { }
