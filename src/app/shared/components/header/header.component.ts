import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  navbarOptions: any = ['Hombre', 'Mujer', 'Junior', 'Niños', 'Accesorios', 'Ofertas'];
  constructor() { }

  ngOnInit(): void {
  }

}
