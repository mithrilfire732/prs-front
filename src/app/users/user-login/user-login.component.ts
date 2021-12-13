import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from '../system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  failed: boolean = false

  password: string = ""

  username: string = ""

  constructor(
    private ussv: UserService,
    private sysv: SystemService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  loginTry(){
    this.ussv.login(this.username,this.password).subscribe({
      next: res => {
        console.debug("Logging in:", res);
        this.sysv.user = res;
        this.sysv.isLoggedIn = true; 
        this.router.navigate(["/home"]);},
      error: err => {console.debug(err); this.failed = true}})
  }

}
