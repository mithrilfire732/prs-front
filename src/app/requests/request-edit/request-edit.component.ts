import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Requestline } from '../requestline';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  requestId: number = 0;

  request: Request = new Request();

  requestlines: Requestline[] = [];

  constructor(private rqsv: RequestService, 
              private router: Router, 
              private route: ActivatedRoute,
              private rlsv: RequestlineService) { }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.params["id"];
    this.fetchData();
  }

  save(): void {
    this.rqsv.edit(this.requestId,this.request).subscribe({
      next: res => {console.debug("Success:", res); 
                    this.router.navigate(["/requests"])},
      error: err =>{console.debug(err)}
    })
  }
  
  fetchData(){
    this.rqsv.find(this.requestId).subscribe({next: res => {console.debug("Request:", res); this.request=res; this.requestlines = res.requestlines}, error: err => {console.debug(err);}})

  }

  delete(): void {
    this.rqsv.delete(this.requestId).subscribe({
      next: res => {console.debug("Success:",res)
          this.router.navigate(["/requests"])},
      error: err => {console.debug(err)}
    })
  }

}