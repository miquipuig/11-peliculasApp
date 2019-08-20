import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: PeliculasService , private router: Router) { }
  peliculas: any[] = [];
  termino: string;
loading: boolean;
  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params.subscribe( params =>{

      //console.log(params['termino']);
      this.termino = params['termino'];
      console.log(this.termino);

      if(params['termino']){
      this.service.searchFilm(params['termino']).subscribe(data =>{
        this.peliculas = data;
        this.loading = false;
      });

      } else {
        this.peliculas = [];
        this.loading = false;
        
      }

    });
  }
  buscarPelicula( termino: string) {

    this.router.navigate( ['/buscar', termino]);
  }

}
