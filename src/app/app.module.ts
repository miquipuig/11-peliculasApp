import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/https';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

import { AppRoutingModule } from './app.routes';
import { PeliculasGrupoComponent } from './components/peliculas-grupo/peliculas-grupo.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscadorComponent,
    PeliculaComponent,
    PeliculasGrupoComponent,
    LoadingComponent,
    PeliculaTarjetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }