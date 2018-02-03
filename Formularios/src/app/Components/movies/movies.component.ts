import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../Models/MovieModel';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  //PRIMER EJERCICIO
  // movie:MovieModel = new MovieModel();

  // clickHandler(){
  //   //alert(this.movie.title);
  //   alert("Hola mundo");
  // }

  //SEGUNDO EJERCICIO Y TERCER EJERCICIO
  movies:MovieModel[] = [
    {
      id: 1, title: 'La era de hielo', descripcion: 'Película infantil', director: 'Roberto', categoria: 'Infantil'
    },
    {
      id: 2, title: 'Misión imposible', descripcion: 'Película de acción', director: 'Juan', categoria: 'Accion'
    },
    {
      id: 3, title: 'Titanic', descripcion: 'Película romántica', director: 'Perez', categoria: 'Romantica'
    }
  ];

  displayDetail(movie:MovieModel)
  {
    alert("Presionaste la película: " + movie.director);
  }
  
  constructor() { }

  ngOnInit() {
  }
}
