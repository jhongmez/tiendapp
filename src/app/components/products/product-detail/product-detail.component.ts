import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../../shared/services/product.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products: any = []

  constructor(
    private route: ActivatedRoute,
    private productSvc: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.detalleProducto();

  }

  detalleProducto() {
    this.route.params.pipe( take(1))
      .subscribe( (params) => {
        const id = params['id'];
        this.products = this.productSvc.obtenerInfoProductos(id);
        console.log(this.products);
      });
  }

  goBack() {
    this.location.back();
  }

}
