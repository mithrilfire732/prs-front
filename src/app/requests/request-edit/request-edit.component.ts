import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  requestId: number = 0;

  request: Request = new Request();

  constructor(private rqsv: RequestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.params["id"]
    this.rqsv.find(this.requestId).subscribe({next: res => {console.debug("Request:", res)}, error: err => {console.debug(err);}})
  }

  save(): void {
    this.rqsv.edit(this.requestId,this.request).subscribe({
      next: res => {console.debug("Success:", res); 
                    this.router.navigate(["/requests"])},
      error: err =>{console.debug(err)}
    })
  }

}