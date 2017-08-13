import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-star-comp',
  templateUrl: './star-comp.component.html',
  styleUrls: ['./star-comp.component.css']
})
export class StarCompComponent implements OnInit {

    starsCount: number;

  // reviews  = [
  //   {rating : 4, review: `this is great product`},
  //   {rating : 8, review: `this is great product, need proper documentation`},
  // ];

  constructor() { }

  ngOnInit() {
  }

}
