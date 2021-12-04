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
          return response;
        }
      )
    );
  }

  getAllCars(pageNumber, pageSize): any  {
    return this.http.get(`${this.url}car/search?pageNumber=${pageNumber}&pageSize=${pageSize}`).pipe(
      map(
        (response: HttpResponse<any>) => {
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
  getCarMediaById(carId): any{
    return this.http.get(`${this.url}car_media?carId=${carId}`).pipe(
      map(
        (response: HttpResponse<any>) => {
          return response;
        }
      )
    );
  }
  public async readFile(path): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.http.get(path).toPromise().then(res => {
        resolve(
          // console.log(res)
          true
        );
      }).catch(err => {
        reject(err);
      });
    });
  }
}
