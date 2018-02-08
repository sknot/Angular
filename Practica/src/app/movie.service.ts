import { Injectable } from '@angular/core';
import { MovieModel } from './Models/MovieModel';

@Injectable()
export class MovieService {

  movies:MovieModel[];
  index:number = 0;
  
  constructor() { 
    this.movies = [
      {id:1, _id:"", title:'Batman', descripcion:'Alfred and his guy'},
      {id:2, _id:"", title:'Justice League', descripcion:'Superman and the other'},
      {id:3, _id:"", title:'Suicide Squad', descripcion:'Bunch of loonies'}
    ];

    this.index = this.movies.length;
  }

  getMovies(): MovieModel[]{
    return this.movies;
  }

  saveMovie(movie:MovieModel){
    movie.id = ++this.index;
    this.movies.push(movie);
  }

  deleteMovie(movie: MovieModel){
     let index = this.movies.indexOf(movie,0);
     this.movies.splice(index,1);
  }

  updateMovie(movie: MovieModel)
  {
    alert("Pelicula " + movie.title + " actualizada correctamente.");
    //AQUI VA EL METODO HACIA EL WEB SERVICE
  }

  findMovie(id:string):MovieModel{

    let intId = +id;

    let movie = this.movies.find(x=> x.id === intId);

    return movie;
  }

}
