import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `
 <ul class="list-group">
        <li class="list-group-item" (click)="onClick1()"><a>Thoughts</a></li>
        <li class="list-group-item" (click)="onClick2()"><a>Inspire</a></li>
        <li class="list-group-item" (click)="onClick3()"><a>Nature</a></li>

         
        </ul>
  `,
  styles: []
})
export class OneComponent implements OnInit {

@Output() 
imgEv1 : EventEmitter<any>
// @Output()
// imgEv2 : EventEmitter<any>


  constructor() {
    this.imgEv1=new EventEmitter();
    // this.imgEv2=new EventEmitter();
   }

  ngOnInit() {
    
  }


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



}


