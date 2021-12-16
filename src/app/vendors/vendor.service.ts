import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl: string = `${this.app.config.baseurl}/api/vendors`;


  constructor(private http: HttpClient,
    private app: AppInitService) { }

  list():Observable<Vendor[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>
  }
  find(id: number):Observable<Vendor>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Vendor>
  }
  edit(id: number, vendor: Vendor):Observable<Vendor>{
    return this.http.put<Vendor>(`${this.baseurl}/${id}`,vendor) as Observable<Vendor>
  }
  create(vendor: Vendor):Observable<Vendor>{
    return this.http.post<Vendor>(`${this.baseurl}`, vendor) as Observable<Vendor>
  }
  delete(id: number):Observable<Vendor>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Vendor>
  }
}
