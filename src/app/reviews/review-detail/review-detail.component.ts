import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Request } from 'src/app/requests/request';
import { Requestline } from 'src/app/requests/requestline';
import { RequestService } from 'src/app/requests/request.service';
import { RequestlineService } from 'src/app/requests/requestline.service';
  
@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
  })
  export class ReviewDetailComponent implements OnInit {
  
    reject: boolean = false;
    request: any;
    
    requestid: number = 0;
  
    requestlines: Requestline[] = [];
    
    constructor(private rssv: RequestService, private route: ActivatedRoute, private rlsv: RequestlineService, private router: Router) { }
  
    ngOnInit(): void {
      this.requestid = this.route.snapshot.params["id"];
      this.fetchData();
    }
  
    fetchData() {
      this.rssv.find(this.requestid).subscribe({next: res => {console.debug("requests:",res); this.request=res; this.requestlines = res.requestlines},
      error: err => {console.debug(err);}})
    }
  
    approveRequest(){
      this.request.user = null;
      this.request.requestlines = null;
      this.rssv.approve(this.request).subscribe({next: res => {console.debug("success"); this.fetchData(); this.router.navigate(["/reviewer/1"])},
    error: err => {console.debug(err)}});
    }

    clickReject(){
      this.reject = true;
    }

    rejectRequest(){
      this.request.user = null;
      this.request.requestlines = null;
      this.rssv.reject(this.request).subscribe({next: res => {console.debug("success"); this.fetchData(); this.router.navigate(["/reviewer/1"])},
    error: err => {console.debug(err)}});
    }
  }
                                    
  
