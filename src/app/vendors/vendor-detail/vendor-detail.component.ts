import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: any;

  vendorId: number = -1;

  constructor(private route: ActivatedRoute, private vdsvc: VendorService) { }

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

}
