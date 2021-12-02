import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { User } from 'src/app/users/user.class';
import { SystemService } from 'src/app/users/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  constructor(private rqsv: RequestService, 
    private router: Router,
    private sysv: SystemService) { }

  user: User = new User();

  ngOnInit(): void {
    this.user = this.sysv.user;
    this.request.userId = this.sysv.user.id;
  }

  save(): void {
    this.rqsv.create(this.request).subscribe({
      next: res => {console.debug("Success:", res); 
                    this.router.navigate(["/requests"])},
      error: err =>{console.debug(err)}
    })
  }

}
