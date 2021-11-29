import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  productid: number = 0;
  
  constructor( private pdsv: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productid = this.route.snapshot.params["id"];
    this.pdsv.find(this.productid).subscribe({
      next: res => {console.debug("Product:", res);
                    this.product = res},
      error: err => {console.debug(err)}
    })
  }

}
