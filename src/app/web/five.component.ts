import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-five',
  template: `
   
   <div class="row">
   <div class="col-md-3">
    <img [src]="'../assets/electronic/'+imgNm1.imgs1[0]" alt="../assets/d.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
   <div class="col-md-3">
    <img [src]="'../assets/electronic/'+imgNm1.imgs1[1]" alt="../assets/c.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <div class="col-md-3">
    <img [src]="'../assets/electronic/'+imgNm1.imgs1[2]" alt="../assets/e.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <div class="col-md-3">
    <img [src]="'../assets/electronic/'+imgNm1.imgs1[3]" alt="../assets/f.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



       <div class="row">
   <div class="col-md-3">
    <img [src]="'../assets/life/'+imgNm1.imgs1[0]" alt="../assets/d.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
   <div class="col-md-3">
    <img [src]="'../assets/life/'+imgNm1.imgs1[1]" alt="../assets/c.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <div class="col-md-3">
    <img [src]="'../assets/life/'+imgNm1.imgs1[2]" alt="../assets/e.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <div class="col-md-3">
    <img [src]="'../assets/life/'+imgNm1.imgs1[3]" alt="../assets/f.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <div class="col-md-3">
    <img [src]="'../assets/life/'+imgNm1.imgs1[4]" alt="../assets/d.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
   <div class="col-md-3">
    <img [src]="'../assets/life/'+imgNm1.imgs1[5]" alt="../assets/c.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <div class="col-md-3">
    <img [src]="'../assets/life/'+imgNm1.imgs1[6]" alt="../assets/e.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <div class="col-md-3">
    <img [src]="'../assets/life/'+imgNm1.imgs1[7]" alt="../assets/f.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



   <div class="row">
   <div class="col-md-3">
    <img [src]="'../assets/life2/'+imgNm1.imgs1[0]" alt="../assets/d.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
   <div class="col-md-3">
    <img [src]="'../assets/life2/'+imgNm1.imgs1[1]" alt="../assets/c.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <div class="col-md-3">
    <img [src]="'../assets/life2/'+imgNm1.imgs1[2]" alt="../assets/e.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <div class="col-md-3">
    <img [src]="'../assets/life2/'+imgNm1.imgs1[3]" alt="../assets/f.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <div class="col-md-3">
    <img [src]="'../assets/life2/'+imgNm1.imgs1[4]" alt="../assets/d.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
   <div class="col-md-3">
    <img [src]="'../assets/life2/'+imgNm1.imgs1[5]" alt="../assets/c.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <div class="col-md-3">
    <img [src]="'../assets/life2/'+imgNm1.imgs1[6]" alt="../assets/e.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     <div class="col-md-3">
    <img [src]="'../assets/life2/'+imgNm1.imgs1[7]" alt="../assets/f.jpg" width="200px"/>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;




  `,
  styles: []
})
export class FiveComponent implements OnInit {

@Input()
imgNm1:any;

@Input()
imgNm2:any;

  constructor() { }

  ngOnInit() {
  }

}
