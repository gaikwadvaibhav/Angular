import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `
 <ul class="list-group">
<<<<<<< HEAD
        <li class="list-group-item" (click)="onClick1()"><a>Thoughts</a></li>
        <li class="list-group-item" (click)="onClick2()"><a>Inspire</a></li>
        <li class="list-group-item" (click)="onClick3()"><a>Nature</a></li>

=======
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
>>>>>>> 729b795053363f0887357658db05182ae21e0c23
         
        </ul>
  `,
  styles: []
})
export class OneComponent implements OnInit {

@Output() 
<<<<<<< HEAD
imgEv1 : EventEmitter<any>
// @Output()
// imgEv2 : EventEmitter<any>


  constructor() {
    this.imgEv1=new EventEmitter();
    // this.imgEv2=new EventEmitter();
=======
imgEv : EventEmitter<any>

  constructor() {
    this.imgEv=new EventEmitter();
>>>>>>> 729b795053363f0887357658db05182ae21e0c23
   }

  ngOnInit() {
    
  }


<<<<<<< HEAD
  onClick1(){
      this.imgEv1.emit({
      imgs1:[
         'c.jpg','d.jpg','e.jpg', 'f.jpg'
      ]
    
  });
}

  onClick2(){
      this.imgEv1.emit({
      imgs1:[
        'resized001.jpg','resized002.jpg','resized003.jpg','resized004.jpg','resized005.jpg','resized006.jpg','resized007.jpg','resized008.jpg'
      ]
    
  });
}

  onClick3(){
      this.imgEv1.emit({
      imgs1:[
        '11.jpg','22.jpg','33.jpg','44.jpg','55.jpg','66.jpg','77.jpg','88.jpg'
      ]
    
  });
}

//   onClick3(){
//       this.imgEv.emit({
//       imgs:[
//         'd.jpg','e.jpg','c.jpg', 'f.jpg'
//       ]
    
//   });
// }

//   onClick4(){
//       this.imgEv.emit({
//       imgs:[
//         'd.jpg','e.jpg','c.jpg', 'f.jpg'
//       ]
    
//   });
//   }

//   onClick5(){
//       this.imgEv.emit({
//       imgs:[
//         'd.jpg','e.jpg','c.jpg', 'f.jpg'
//       ]
    
//   });
//   }

//   onClick6(){
//       this.imgEv.emit({
//       imgs:[
//         'd.jpg','e.jpg','c.jpg', 'f.jpg'
//       ]
    
//   });
//   }

//   onClick7(){
//       this.imgEv.emit({
//       imgs:[
//         'd.jpg','e.jpg','c.jpg', 'f.jpg'
//       ]
    
//   });
// }

//   onClick8(){
//       this.imgEv.emit({
//       imgs:[
//         'd.jpg','e.jpg','c.jpg', 'f.jpg'
//       ]
    
//   });
// }
//   onClick9(){
//       this.imgEv.emit({
//       imgs:[
//         'd.jpg','e.jpg','c.jpg', 'f.jpg'
//       ]
    
//   });
// }
//   onClick10(){
//       this.imgEv.emit({
//       imgs:[
//         'd.jpg','e.jpg','c.jpg', 'f.jpg'
//       ]
    
//   });
//   }


=======
  onClick(){
      this.imgEv.emit({
      imgs:[
        'a.jpg','b.jpg','c.jpg'
      ]
    
  });
  }
>>>>>>> 729b795053363f0887357658db05182ae21e0c23

}


