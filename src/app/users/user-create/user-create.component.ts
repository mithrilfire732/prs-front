import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User(0,"","","","","","",false,false);
  
  constructor(private usrsvc: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  save(){
    this.usrsvc.create(this.user).subscribe({
      next: res => {console.debug("User:", res);
                    this.user = res;},
      error: err =>{console.debug(err)}
    })
  }
}
