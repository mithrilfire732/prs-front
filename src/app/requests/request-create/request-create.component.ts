import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  constructor(private rqsv: RequestService, private router: Router) { }

  ngOnInit(): void {

  }

  save(): void {
    this.rqsv.create(this.request).subscribe({
      next: res => {console.debug("Success:", res); 
                    this.router.navigate(["/requests"])},
      error: err =>{console.debug(err)}
    })
  }

}
