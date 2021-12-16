import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { User } from './user.class';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = `${this.app.config.baseurl}/api/users`;


  constructor(private httpsvc: HttpClient,
      private app: AppInitService) { }

  list(): Observable<User[]>{
    return this.httpsvc.get(`${this.baseurl}`) as Observable<User[]>
  }

  find(id: number): Observable<User>{
    return this.httpsvc.get(`${this.baseurl}/${id}`) as Observable<User>
  }

  login(username: string, password: string): Observable<User>{
    return this.httpsvc.get(`${this.baseurl}/${username}/${password}`) as Observable<User>
  }

  create(user: User): Observable<User>{
    return this.httpsvc.post<User>(`${this.baseurl}`,user) as Observable<User>
  }
  
  edit(id: number, user: User): Observable<User>{
    return this.httpsvc.put<User>(`${this.baseurl}/${id}`,user) as Observable<User>
  }

  delete(id: number): Observable<User>{
    return this.httpsvc.delete(`${this.baseurl}/${id}`) as Observable<User>
  }
}
