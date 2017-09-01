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
       {"title":"Search","link":"#"},
       {"title":"My Bappa",'link':"#"},
       {"title":"Food","link":'#'},
       // tslint:disable-next-line:quotemark
       {"title":" Emergency","link":"#"},
       {"title":"Hospital","link":"#"},
       {"title":"Police Station","link":"#"},
       {"title":"About","link":"#"},

      //  {"title":"Home and Kitchen","link":"#",
      //  "subItems":[
      //              {"title":"Furniture","link":"#"},
      //              {"title":"Cookware","link":"#"},
      //             ]
      //  },
      //  {"title":"Car and Bike Accessories","link":"#",
      //   "subItems":[
      //                {"title":"Tyres and Alloys",'link':'#'},
      //                {'title':'Comfort and Safety','link':'#'},
      //               ]
      //  },
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
