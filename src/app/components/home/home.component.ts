import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  populares: any[] = [];
  cartelera: any[] = [];
  kids: any[] = [];
  loading: boolean;
  carga: number;
 
  constructor( private peliculaService: PeliculasService , private router: Router) {

    this.loading = true;
    this.carga = 0;

    peliculaService.getPopulares().subscribe((data: any) => {
    this.populares = data;
    this.carga++;
    this.loadingD();
    });

    peliculaService.getEnCartelera().subscribe(data => {
      this.cartelera = data;
      this.carga++;
      this.loadingD();
    });

    peliculaService.getKids().subscribe(data => {
      this.kids = data;
      this.carga++;
      this.loadingD();

    });

   }

  ngOnInit() {
  }

  loadingD() {
    if (this.carga >= 3 ) {

      this.loading = false;
    }
  }

  verPelicula( id: number ) {
    this.router.navigate( ['/pelicula', id] );
  }
}
