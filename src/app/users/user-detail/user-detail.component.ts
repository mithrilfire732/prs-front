import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

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

}
