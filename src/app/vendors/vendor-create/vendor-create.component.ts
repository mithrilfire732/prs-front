import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor(0,"","","","","","","","")

  constructor(private vdsvc: VendorService, private router: Router ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.vdsvc.create(this.vendor).subscribe({
      next: res => {
        console.debug("Success:", res);
        this.vendor = res;
        this.router.navigate(["/vendors"]);
      },
      error: err => {
        console.debug(err);
      }
    })
  }

}
