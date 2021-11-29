import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { Requestline } from '../requestline';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = []

  constructor(private rqsv: RequestService) { }

  ngOnInit(): void {
    this.rqsv.list().subscribe({next: res =>{console.debug("Requests:", res); this.requests=res}, 
  error: err => {console.debug(err)}})
  }

}
