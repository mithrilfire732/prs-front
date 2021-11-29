import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.class';
import { Product2 } from './product2.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl: string = "http://localhost:10732/api/products";



  constructor(private http: HttpClient) {}

  list(): Observable<Product[]> {
    return this.http.get(this.baseurl) as Observable<Product[]>;
  }

  find(id: number): Observable<Product>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>;
  }

  create(product: Product2): Observable<Product>{
    return this.http.post<Product>(`${this.baseurl}`,product) as Observable<Product>;
  }

  edit(id: number, product:Product): Observable<Product> {
    return this.http.put(`${this.baseurl}/${id}`, product) as Observable<Product>;
  }

  delete(id: number): Observable<Product> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Product>;
  }

}
