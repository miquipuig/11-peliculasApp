import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  peliculas: any[] = [];
  termino: string;
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private service: PeliculasService , private router: Router) { 
  this.termino = '';
  }
 
  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {

      if(params['termino']){
      this.termino = params['termino'];
      this.buscarPelicula();


      } else {
        this.peliculas = [];

      }

    });
  }
  buscarPelicula() {

    //this.router.navigate( ['/buscar', termino]);

    if (this.termino) {
      this.loading = true;
      this.service.searchFilm(this.termino).subscribe(data => {
        this.peliculas = data;
        this.loading = false;
      });
    }
  }

}
