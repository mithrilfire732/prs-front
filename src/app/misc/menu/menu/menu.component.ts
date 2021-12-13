import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
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
  
  menus : Menu[]=[]

  userMenu: Menu[] = [];

  reviewerMenu : Menu[] = [];

  adminMenu : Menu[] = [];

  LoggedIn: boolean = false;

  constructor(private sysv: SystemService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.user = this.sysv.user;
    this.loginCheck();
    this.menuUserRes(this.user.isReviewer, this.user.isAdmin);
  }


  menuUserRes(reviewer: boolean, admin: boolean){
    this.userMenu = [
      new Menu("Home", "/home"),
      new Menu("About","/about"),
      new Menu("Requests","/requests")
    ];
    this.reviewerMenu = [
    new Menu("Review",`/reviewer/${this.user.id}`) 
    ]
    
    this.adminMenu = [
      new Menu("Users","/users"),
      new Menu("Vendors","/vendors"),
      new Menu("Products","/products")
    ];

    if(admin){
      this.menus = this.userMenu.concat(this.reviewerMenu).concat(this.adminMenu)
    }

    else if(reviewer){
      this.menus = this.userMenu.concat(this.reviewerMenu)
    }

    else{
      this.menus = this.userMenu
    }
  }

  loginCheck(){
    if(this.sysv.isLoggedIn){
      this.LoggedIn = true;
    } else if(this.route.snapshot.toString() !== "/login"){
      this.router.navigate(["/login"])
    }
  }

}
