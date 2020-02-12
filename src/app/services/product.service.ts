import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

  productsPath = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  getProducts(categoryId): Observable<product[]> {
    let newPath = this.productsPath;
    if (categoryId) {
      newPath += "?categoryId=" + categoryId
    }

    return this.http.get<product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError));
  }

  addProduct(pr:product): Observable<product>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Blank'
      })
    }
    return this.http.post<product>(this.productsPath,pr,httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError));
  } 

  handleError(handleError: HttpErrorResponse) {
    let errorMessage = ''
    if (handleError.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu! ' + handleError.error.message
    } else {
      errorMessage = 'Sistemsel bir hata oluştu!'
    }
    return throwError(errorMessage);
  }
}
