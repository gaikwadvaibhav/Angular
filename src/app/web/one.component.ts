import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `
 <ul class="list-group">
        <li class="list-group-item" (click)="onClick()"><a>Electronics</a></li>
        <li class="list-group-item" (click)="onClick()"><a>Cars</a></li>
        <li class="list-group-item" (click)="onClick()"><a>Bikes</a></li>
        <li class="list-group-item" (click)="onClick()"><a>Watches</a></li>
        <li class="list-group-item" (click)="onClick()"><a>Shirt</a></li>
        <li class="list-group-item" (click)="onClick()"><a>T-Shirt</a></li>
        <li class="list-group-item" (click)="onClick()"><a>Saree</a></li>
        <li class="list-group-item" (click)="onClick()"><a>Laptop</a></li>
        <li class="list-group-item" (click)="onClick()"><a>Shoes</a></li>
        <li class="list-group-item" (click)="onClick()"><a>Sacs</a></li>
         
        </ul>
  `,
  styles: []
})
export class OneComponent implements OnInit {

@Output() 
imgEv : EventEmitter<any>

  constructor() {
    this.imgEv=new EventEmitter();
   }

  ngOnInit() {
    
  }


  onClick(){
      this.imgEv.emit({
      imgs:[
        'a.jpg','b.jpg','c.jpg'
      ]
    
  });

  }

}


