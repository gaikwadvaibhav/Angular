import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  private menuItemsArray: any[] = [ 
       {"title":"Electricity","link":"#"},
       {"title":"Mobile Bill","link":"#"},
       {"title":"Shoes","link":"#"},
       {"title":"Android Phones","link":"#"},
       {"title":"Apple","link":"#"},
       {"title":"Watches","link":"#"},
       {"title":"Clothes","link":"#"},

       {"title":"Home and Kitchen","link":"#",
       "subItems":[
                   {"title":"Furniture","link":"#"},
                   {"title":"Cookware","link":"#"},
                  ]
       },
       {"title":"Car and Bike Accessories","link":"#",
        "subItems":[
                     {"title":"Tyres and Alloys","link":"#"},
                     {"title":"Comfort and Safety","link":"#"},
                    ]
       },
 ];

  // public onMenuClose(){
  //   console.log("menu closed");
  // }
  // public onMenuOpen(){
  //   console.log("menu Opened");
  // }
  // private onItemSelect(item:any){
  //   console.log(item);
  // }

}
