import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  config: any;

  getSettings(): Promise<any> {
    return this.http.get("../assets/config.json").toPromise().then(
      (data: any) => {
        this.config = data;
      }
    )
  }

  constructor(public http: HttpClient) { }
}
