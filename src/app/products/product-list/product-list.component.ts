import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  constructor(private prsv: ProductService) { }

  ngOnInit(): void {
    this.prsv.list().subscribe({ 
      next: res => {console.debug("Products:", res);
      this.products=res;},
      error: err => {console.debug("ERROR:", err)}
    })
  }

}
