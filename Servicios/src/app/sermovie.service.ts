import { Injectable } from '@angular/core';
import { MovieModel } from './Models/MovieModel'

@Injectable()
export class SermovieService {

  constructor() { }
 
  getMovies(): MovieModel[] {

    let movies: MovieModel[] = [
      {
        id: 1, title: 'La era de hielo', descripcion: 'Película infantil'
      },
      {
        id: 2, title: 'Misión imposible', descripcion: 'Película de acción'
      },
      {
        id: 3, title: 'Titanic', descripcion: 'Película romántica'
      }
    ];

    return movies
  }
}
