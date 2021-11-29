import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl= "http://localhost:10732/api/requests"
  
  constructor(private http: HttpClient) { }

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
}
