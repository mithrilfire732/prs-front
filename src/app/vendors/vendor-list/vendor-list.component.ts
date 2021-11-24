import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = []

  constructor(private vdsvc: VendorService) { }

  ngOnInit(): void {
    this.vdsvc.list().subscribe({
      next: res => {
        console.debug("Vendors:", res);
        this.vendors = res;
      },
      error: err => {
        console.debug(err)
      }
    })
  }

}
