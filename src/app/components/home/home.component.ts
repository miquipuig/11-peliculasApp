import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  peliculas: any[] = [];
  loading: boolean;
  constructor( private peliculaService: PeliculasService ) {
    this.loading = true;
    peliculaService.getPopulares().subscribe(data=>{
    console.log(data)})

    peliculaService.getPopulares().subscribe((data: any) => {
    this.peliculas = data })
    this.loading = false;
    console.log(this.peliculas);
   }

  ngOnInit() {
  }

}
