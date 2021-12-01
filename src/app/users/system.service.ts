import { Injectable } from '@angular/core';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user: User = new User();

  constructor() { }
}
