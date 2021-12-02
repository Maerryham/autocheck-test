import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ProductComponent} from '../product/product.component';
import {ProductDetailComponent} from '../product/product-detail/product-detail.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'product',
    component: ProductComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  }

  ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true, onSameUrlNavigation: 'reload'}), CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class RoutingModule { }

