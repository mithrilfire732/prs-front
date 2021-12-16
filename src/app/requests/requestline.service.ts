import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requestline } from './requestline';
import { ActivatedRoute } from '@angular/router';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseurl: string = `${this.app.config.baseurl}/api/requestlines`
  constructor(private http: HttpClient, private route: ActivatedRoute, private app: AppInitService) { }

  get(): Observable<Requestline[]>{
    return this.http.get(this.baseurl)  as Observable<Requestline[]>;
  }

  find(id: number): Observable<Requestline>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }

  create(rl: Requestline): Observable<Requestline>{
    return this.http.post<Requestline>(`${this.baseurl}`,rl) as Observable<Requestline>
  }

  edit(id: number, rl: Requestline): Observable<Requestline>
  {
    return this.http.put(`${this.baseurl}/${id}`, rl) as Observable<Requestline>;
  }

  delete(id: number): Observable<Requestline>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }
}
