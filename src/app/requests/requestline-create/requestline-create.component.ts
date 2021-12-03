import { Component, OnInit } from '@angular/core';
import { Requestline } from '../requestline';
import { RequestlineService } from '../requestline.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/products/product.class';
import { ProductService } from 'src/app/products/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: Requestline = new Requestline();

  products: Product[] = [];

  subtotal: number =0;

  constructor(
    private rlsv: RequestlineService,
    private pdsv: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.requestline.requestId = this.route.snapshot.params["id"];
    this.pdsv.list().subscribe({
      next: res => {console.debug("Products:", res)
      this.products = res}, 
    error: err => {console.debug(err)}})
    this.requestline.product = new Product();
    
  }

  save(): void{
    this.requestline.product = null
    this.rlsv.create(this.requestline).subscribe({
      next: res => {console.debug("Success:", res);
          this.router.navigate([`/requests/${this.requestline.requestId}`])},
      error: err => {console.debug(err)}
    });
  }

  productChange(){
    this.requestline.productId = +this.requestline.productId;
    this.pdsv.find(this.requestline.productId)
    .subscribe({
      next: res => {
          console.debug("product:", res);
          this.requestline.product = res;
          this.subtotal = this.requestline.product.price * this.requestline.quantity
  }, error: err => {console.debug(err);}})
  }

  quantityChange(){
    this.subtotal = this.requestline.product.price * this.requestline.quantity
  }

}
