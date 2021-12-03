import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/requests/request';
import { RequestService } from 'src/app/requests/request.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/users/user.class';
import { SystemService } from 'src/app/users/system.service';

@Component({
  selector: 'app-reviewer-list',
  templateUrl: './reviewer-list.component.html',
  styleUrls: ['./reviewer-list.component.css']
})
export class ReviewerListComponent implements OnInit {

  userid: number = 0;

  user: User = new User;

  requests: Request[] = [];

  constructor(
    private rqsv: RequestService,
    private route: ActivatedRoute,
    private sysv: SystemService
  ) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params["id"];
    this.user = this.sysv.user
    this.rqsv.listRl(this.userid).subscribe({next: res=> {console.debug("Requests:", res); this.requests = res},
  error: err => {console.debug(err)}});

  }

}
