import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { OneComponent } from './web/one.component';
<<<<<<< HEAD
import { FiveComponent } from './web/five.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { StarCompComponent } from './star-comp/star-comp.component';
import { StarRatingModule } from 'angular-star-rating';


// import { TwoComponent } from './web/two.component';
=======
import { TwoComponent } from './web/two.component';
>>>>>>> 729b795053363f0887357658db05182ae21e0c23

@NgModule({
  declarations: [
    AppComponent,

    WebComponent,

    OneComponent,

<<<<<<< HEAD
    FiveComponent,

    NavBarComponent,

    TableComponent,

    StarCompComponent,

    // TwoComponent
  ],
  imports: [
    BrowserModule,
    Ng2TableModule,
    StarRatingModule
=======
    TwoComponent
  ],
  imports: [
    BrowserModule
>>>>>>> 729b795053363f0887357658db05182ae21e0c23
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
