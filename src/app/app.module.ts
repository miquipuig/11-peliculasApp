import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
//import { HttpModule } from '@angular/https';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

import { AppRoutingModule } from './app.routes';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscadorComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }