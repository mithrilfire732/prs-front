import { Component, OnInit } from '@angular/core';
import { Requestline } from '../requestline';
import { Product } from 'src/app/products/product.class';
import { RequestlineService } from '../requestline.service';
import { ProductService } from 'src/app/products/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline: Requestline = new Requestline();

  requestlineId: number = 0;

  products: Product[] = [];

  subtotal: number = 0;

  constructor(
            private rlsv: RequestlineService,
            private pdsv: ProductService,
            private route: ActivatedRoute,
            private router: Router
  ) { }

  ngOnInit(): void {
    this.requestlineId = this.route.snapshot.params["id"];
    this.pdsv.list().subscribe({next: res => {console.debug("Products:", res);
                                              this.products = res }, error: err => {console.debug(err)}});
    this.rlsv.find(this.requestlineId).subscribe({
      next: res => {console.debug(res); 
        this.requestline = res, 
        this.calculateSubtotal()}, 
        error: err => {console.debug(err)}});
  }

  save(): void{
    this.requestline.productId = +this.requestline.productId;
    this.rlsv.edit(this.requestlineId,this.requestline).subscribe({ 
      next: res => {console.debug(res); 
        this.calculateSubtotal();
        this.router.navigate([`/requests/${this.requestline.requestId}`]);
      },
     error: err => {console.debug(err)}});
  }

  calculateSubtotal(): void {
    this.subtotal= this.requestline.product.price * this.requestline.quantity;
  }

  productChange():void {
    let pid: number = this.requestline.productId;
    this.pdsv.find(pid).subscribe({
      next: res => {console.debug("product:", res);
        this.requestline.product = res;
        this.calculateSubtotal()},
      error: err => {console.debug(err);}});
  }

}
