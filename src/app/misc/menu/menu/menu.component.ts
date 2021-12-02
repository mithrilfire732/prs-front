import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/users/system.service';
import { User } from 'src/app/users/user.class';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: User = new User();
  
  menus : Menu[]=[

  ]

  constructor(private sysv: SystemService) {

  }

  ngOnInit(): void {
    this.user = this.sysv.user;
    this.menus = [    
    new Menu("Home", "/home"),
    new Menu("About","/about"),
    new Menu("Users","/users"),
    new Menu("Vendors","/vendors"),
    new Menu("Products","/products"),
    new Menu("Requests","/requests"),
    new Menu("Review",`/reviewer/${this.user.id}`)] 
    
  }

}
