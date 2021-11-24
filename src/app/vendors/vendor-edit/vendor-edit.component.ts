import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from  '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor: any;

  vendorId: number = -1;

  constructor(private route: ActivatedRoute, private router: Router, private vdsvc: VendorService) { }

  ngOnInit(): void {
    this.vendorId = this.route.snapshot.params["id"];
    this.vdsvc.find(this.vendorId).subscribe({
      next: res => {
        console.debug("Vendor:", res);
        this.vendor = res;
      },
      error: err => {console.debug(err)}
    })
  }

  save(): void {
    this.vdsvc.edit(this.vendorId, this.vendor).subscribe({
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
  delete(): void {
    this.vdsvc.delete(this.vendorId).subscribe({
      next: res => {
        console.debug("Success:", res);
        this.router.navigate(["/vendors"]);
      },
      error: err => {
        console.debug(err);
      }
    })
  }

}
