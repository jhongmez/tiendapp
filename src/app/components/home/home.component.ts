import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  slides = [
    {img: "assets/img/backgrounds/banner-principal.jpg"},
    {img: "assets/img/backgrounds/banner-principal.jpg"}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  
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
