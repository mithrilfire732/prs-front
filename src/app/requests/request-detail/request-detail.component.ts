import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { Requestline } from '../requestline';
import { RequestlineService } from '../requestline.service';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: any;
  
  requestid: number = 0;

  requestlines: Requestline[] = [];
  
  constructor(private rssv: RequestService, private route: ActivatedRoute, private rlsv: RequestlineService) { }

  ngOnInit(): void {
    this.requestid = this.route.snapshot.params["id"];
    this.fetchData();
  }

  fetchData() {
    this.rssv.find(this.requestid).subscribe({next: res => {console.debug("requests:",res); this.request=res; this.requestlines = res.requestlines},
    error: err => {console.debug(err);}})
  }

  review(){
    this.request.user = null;
    this.request.requestlines = null;
    this.rssv.review(this.request).subscribe({next: res => {console.debug("success"); this.fetchData()},
  error: err => {console.debug(err)}});
  }
  
  delete(id: number): void {
    this.rlsv.delete(id).subscribe({next: res => {console.debug("delete:", res);this.fetchData();
                                                  },
                                    error: err => {console.debug("error:",err)}});
                                  }
}
                                  
