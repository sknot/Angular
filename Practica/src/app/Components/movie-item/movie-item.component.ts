import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../../Models/MovieModel';
//import { MovieService } from '../../movie.service';
import { MovieRemoteService } from '../../movie-remote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() pelicula: MovieModel;

  constructor(
    //private movieService:MovieService,
    private movieService:MovieRemoteService,
    private route:Router
  ) { }

  ngOnInit() {
  }

  deleteMovie()
  {
    this.movieService.deleteMovie(
      this.pelicula,
      () => {

        this.route.navigate(['']);

      },
      (message, statusCode) => {
        alert(message + ' - Error: ' + statusCode);
      });
  }
}
