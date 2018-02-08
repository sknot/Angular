import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../Models/MovieModel';
import { SermovieService } from '../../sermovie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  movie: MovieModel[]

  constructor(
    private movieService: SermovieService
  ) { }

  ngOnInit() {
    this.movie = this.movieService.getMovies();
  }

}
