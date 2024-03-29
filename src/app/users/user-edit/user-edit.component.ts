import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();

  userId: number = -1; 

  constructor(private usrsvc: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params["id"];
    this.usrsvc.find(this.userId).subscribe({
      next: res => {console.debug("User:",res);
                    this.user = res;
                  },
      error: err => {console.debug(err)}
    })
  }

  save(){
    this.usrsvc.edit(this.userId,this.user).subscribe({
      next: res => {console.debug("User:", res);
                    this.user = res;
                    this.router.navigate(['/users'])
                  },
      error: err =>{console.debug(err)}
    })
  }

  delete(){
    this.usrsvc.delete(this.userId).subscribe({
      next: res => {console.debug(res)
        this.router.navigate(['/users'])
                  
      },
      error: err => { console.debug(err)}
      
    })
  }
}
