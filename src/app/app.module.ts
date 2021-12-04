import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { BottombarComponent } from './shared/components/bottombar/bottombar.component';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import {SharedModule} from './shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {ProductModule} from './product/product.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent
  ],
    imports: [
        BrowserModule, RoutingModule,
        HttpClientModule, SharedModule, IvyCarouselModule, ProductModule, BrowserModule, NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
