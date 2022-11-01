import { Component, OnInit } from '@angular/core';
import { Tile } from '../../common/data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breakpoint: number | undefined;
  breakpoint2: number | undefined;
  maxwidth = 1055;
  minwidth = 1054;
  tiles: Tile[] = [
    {text: 'logo', cols: 2, rows: 2, color: '', img: true, logo: false},
    {text: 'Legal', cols: 2, rows: 4, color: '', img: false, logo: false},
    {text: 'Redes Sociales', cols: 2, rows: 2, color: '', img: false, logo: true},
    {text: 'footer', cols: 4, rows: 1, color: '#1B345C', img: false, logo: false},
  ];

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth >= this.maxwidth) ? 3 : 1;
    this.breakpoint2 = (window.innerWidth >= this.maxwidth) ? 2 : 1;
  }

  onResize(event: any) {
    
  this.breakpoint = (event.target.innerWidth <= this.minwidth) ? 1 : 1;
  this.breakpoint = (event.target.innerWidth <= this.minwidth) ? 1 : 1;
  
  this.breakpoint = (event.target.innerWidth >= this.maxwidth) ? 3 : 1;
  this.breakpoint2 = (event.target.innerWidth >= this.maxwidth) ? 2 : 1;
  }

}
