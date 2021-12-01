import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/requests/request';
import { RequestService } from 'src/app/requests/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviewer-list',
  templateUrl: './reviewer-list.component.html',
  styleUrls: ['./reviewer-list.component.css']
})
export class ReviewerListComponent implements OnInit {

  userid: number = 0

  requests: Request[] = [];

  constructor(
    private rqsv: RequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params["id"];
    this.rqsv.listRl(this.userid).subscribe({next: res=> {console.debug("Requests:", res); this.requests = res},
  error: err => {console.debug(err)}});

  }

}
