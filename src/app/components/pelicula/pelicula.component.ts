import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: any = {};
  termino:string;
  url:string;
  carga:boolean=false;
  constructor( private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService, private router: Router) {
   this.carga=false;
    this.termino="";
    this.url="";
    //console.log(activatedRoute.snapshot['_routerState'].url);


    this.activatedRoute.params.subscribe( params => {
      if(params['termino']){
         this.termino = params['termino'];
      }  
      
       this.url = params['url'];

       this.carga=true;
       console.log(this.termino+this.url);
      this.peliculasService.getFilm(params['id']).subscribe(data => {
        this.pelicula = data;
      });


   });


  }

  ngOnInit() {
  }

  volver() {
  
    this.router.navigate( ['/' + this.url, this.termino] );
  }

}
