import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-grupo',
  templateUrl: './peliculas-grupo.component.html',
  styleUrls: ['./peliculas-grupo.component.css']
})
export class PeliculasGrupoComponent implements OnInit {

  @Input() peliculas: any[] = [];
  @Input() titulo: string;
  @Output() peliculaSeleccionada: EventEmitter<number>;
  constructor( private router: Router) {
      this.peliculaSeleccionada = new EventEmitter();
  }


  ngOnInit() {
  }

  verPelicula(id: number) {

    this.peliculaSeleccionada.emit( this.peliculas[id].id );
    // this.router.navigate( ['/pelicula', this.peliculas[id].id] );
  }

}
