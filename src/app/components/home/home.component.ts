import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/models/product-interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public products: any = []

  slides = [
    {img: "assets/img/backgrounds/banner-principal.jpg"},
    {img: "assets/img/backgrounds/banner-principal.jpg"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  slideConfigProducts = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
    "arrow": true,
    "responsive": [
      {
        "breakpoint": 1400,
        "settings": {
          "slidesToShow": 3
        }
      },
      {
        "breakpoint": 1024,
        "settings": {
          "slidesToShow": 2
        }
      },
      {
        "breakpoint": 600,
        "settings": {
          "slidesToShow": 1
        }
      }
    ]
  };
  
  constructor(private productSvc: ProductService) { }

  ngOnInit(): void {
  
    this.listarProductos();

  }

  listarProductos() {
    this.productSvc.cargarProductos()
      .subscribe( (resp: ProductInterface) => {
        this.products = resp.results;
      });
  }

  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}
