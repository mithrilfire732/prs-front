import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Request } from './request';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl= `${this.app.config.baseurl}/api/requests`
  
  constructor(private http: HttpClient,
    private app: AppInitService) { }

  list():Observable<Request[]>{
    return this.http.get(this.baseurl) as Observable<Request[]>;
  }

  find(id: number) : Observable<Request>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }

  create(request: Request) : Observable<Request>{
    return this.http.post(this.baseurl,request) as Observable<Request>;
  }

  edit(id: number, request: Request) : Observable<Request>{
    return this.http.put(`${this.baseurl}/${id}`,request) as Observable<Request>;
  }

  delete(id: number): Observable<Request>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Request>;
  }

  review(request: Request): Observable<Request> {
    return this.http.put(`${this.baseurl}/review`, request) as Observable<Request>;
  }

  reject(request: Request) : Observable<Request> {
    return this.http.put(`${this.baseurl}/reject`, request) as Observable<Request>;
  }
  
  approve(request: Request) : Observable<Request> {
    return this.http.put(`${this.baseurl}/approve`, request) as Observable<Request>;
  }

  listRl(uid: number): Observable<Request[]> {
    return this.http.get(`${this.baseurl}/reviews/${uid}`) as Observable<Request[]>;
  }
}
