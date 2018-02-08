import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../Models/MovieModel';
import { MovieService } from '../../movie.service';
import { MovieRemoteService } from '../../movie-remote.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  peliculas:MovieModel[];

  constructor(
    // public pelisService:MovieService
    public MovieService:MovieRemoteService
  ) { }

  ngOnInit() {
    //this.peliculas = this.pelisService.getMovies();
    this.peliculas = [];

    this.MovieService.getMovies(
      movies => {
        this.peliculas = movies;
      },
      errorMessage => {
        alert(errorMessage);
      }
    );
  }
}
