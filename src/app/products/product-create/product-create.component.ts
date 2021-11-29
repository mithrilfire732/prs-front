import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendors/vendor.class';
import { VendorService } from 'src/app/vendors/vendor.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product(); 

  vendors: Vendor[] = [];
  
  constructor(
    private pdsv: ProductService,
    private vrsv: VendorService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.vrsv.list().subscribe({next: res => {console.debug("Vendors:", res); this.vendors = res},
  error: err => {console.debug(err)}});
  }

  save(){
    this.product.vendorId = +this.product.vendorId;
    this.pdsv.create(this.product)
      .subscribe({
        next: res => {console.debug("Product:", res); 
                      this.router.navigate(["/products"])}, 
        error: err => {console.debug(err);}});
  }

}
