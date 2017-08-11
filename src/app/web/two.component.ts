import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  template: `
    
 <div class="row">
   <div class="col-md-3">
    <img [src]="'../assets/'+imgNm.imgs[0]" alt=[src]="'../assets/a.jpg'" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm.imgs[1]" alt="../assets/b.jpg" width="200"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="col-md-3">
    <img [src]="'../assets/'+imgNm.imgs[2]" alt="../assets/c.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   </div>
  `,
  styles: []
})
export class TwoComponent implements OnInit {

@Input()
imgNm : any;

  constructor() { }

  ngOnInit() {
  }

}
