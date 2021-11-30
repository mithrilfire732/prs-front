import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: any;
  
  requestid: number = 0;
  
  constructor(private rssv: RequestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.requestid = this.route.snapshot.params["id"];
    this.rssv.find(this.requestid).subscribe({next: res => {console.debug("requests:",res); this.request=res},
    error: err => {console.debug(err);}})
  }

}
