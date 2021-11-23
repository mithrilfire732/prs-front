import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any;

  userId: number = 0; 

  constructor(private usrsvc: UserService, private route: ActivatedRoute) { }

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
    this.usrsvc.edit(this.userId,this.user)
  }

}
