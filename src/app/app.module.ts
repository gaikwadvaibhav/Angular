import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { OneComponent } from './web/one.component';
import { FiveComponent } from './web/five.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { StarCompComponent } from './star-comp/star-comp.component';
import { StarRatingModule } from 'angular-star-rating';
import { StructDirectiveComponent } from './struct-directive/struct-directive.component';
import { CustDirectiveDirective } from './struct-directive/cust-directive.directive';
import {RatingModule} from 'ngx-rating';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';




// import { TwoComponent } from './web/two.component';

@NgModule({
  declarations: [
    AppComponent,

    WebComponent,

    OneComponent,

    FiveComponent,

    NavBarComponent,

    TableComponent,

    StarCompComponent,

    StructDirectiveComponent,

    CustDirectiveDirective,

    SidemenuComponent,
    
    // FormsModule,
    
  
    // TwoComponent
  ],
  imports: [
    BrowserModule,
    Ng2TableModule,
    StarRatingModule,
    RatingModule,    
    FormsModule,
    SlideMenuModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
