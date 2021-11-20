import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Product } from '../Product';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:5000/products';
  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }

  addProduct(product:Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.url, product, httpOptions)
  }
}
