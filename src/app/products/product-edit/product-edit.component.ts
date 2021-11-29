import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendors/vendor.class';
import { VendorService } from 'src/app/vendors/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: any;

  vendors: Vendor[] = [];
  
  productid: number = 0;
  
  constructor(
    private pdsv: ProductService,
    private vrsv: VendorService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.vrsv.list().subscribe({next: res => {console.debug("Vendors:", res); this.vendors = res},
  error: err => {console.debug(err)}});
  this.productid = this.route.snapshot.params["id"];
  this.pdsv.find(this.productid).subscribe({next: res => {console.debug("Product:", res); this.product = res}, error: err => {console.debug(err);}})
  }

  save():void{
    this.pdsv.edit(this.productid,this.product).subscribe({next: res => {console.debug("Product:", res); this.router.navigate(["/products"])}, error: err => {console.debug(err);}});
  }

  delete(): void{
    this.pdsv.delete(this.productid).subscribe({ next: res => {console.debug(res); this.router.navigate(["/products"]);}, error: err => {console.debug(err)}})
  }

}
