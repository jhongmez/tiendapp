import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {


  navbarOptions: any = ['Hombre', 'Mujer', 'Junior', 'Niños', 'Accesorios', 'Ofertas'];
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  menuState:string = 'out';

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  @HostListener('click', ['$event.target'])
  onClick(target){
    let item = this.el.nativeElement.querySelector('li');
  }

}
