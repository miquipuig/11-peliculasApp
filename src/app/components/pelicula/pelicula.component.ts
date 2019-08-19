import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: any = {};

  constructor( private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) {

    this.activatedRoute.params.subscribe( params => {

      this.peliculasService.getFilm(params['id']).subscribe(data =>{
        this.pelicula = data;
        console.log(data);
        console.log(this.pelicula.title);
      });


   });


  }

  ngOnInit() {
  }

}
