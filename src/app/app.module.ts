import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { OneComponent } from './web/one.component';
import { TwoComponent } from './web/two.component';

@NgModule({
  declarations: [
    AppComponent,

    WebComponent,

    OneComponent,

    TwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
