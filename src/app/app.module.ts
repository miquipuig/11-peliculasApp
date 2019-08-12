import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
//import { HttpModule } from '@angular/https';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';//para hacer un rest
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }