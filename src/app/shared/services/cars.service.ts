import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  url;
  constructor(private http: HttpClient) {
    this.url = environment.baseApiUrl;
  }

  getCarListings(): any  {
    return this.http.get(`${this.url}make?popular=true`).pipe(
      map(
        (response: HttpResponse<any>) => {
          console.log(response);
          return response;
        }
      )
    );
  }

  getAllCars(): any  {
    return this.http.get(`${this.url}car/search`).pipe(
      map(
        (response: HttpResponse<any>) => {
          console.log(response);
          return response;
        }
      )
    );
  }
  getCarById(carId): any{
    return this.http.get(`${this.url}car/${carId}`).pipe(
      map(
        (response: HttpResponse<any>) => {
          return response;
        }
      )
    );
  }
}
