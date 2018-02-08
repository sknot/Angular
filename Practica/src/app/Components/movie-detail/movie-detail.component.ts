import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { MovieService } from '../../movie.service';
import { MovieRemoteService } from '../../movie-remote.service';
import { MovieModel } from '../../Models/MovieModel';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie:MovieModel;

  constructor(
    private activatedRoute:ActivatedRoute,
    //private movieService:MovieService
    private movieService:MovieRemoteService
  ) { }

  ngOnInit() {
    this.movie = new MovieModel();

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    //this.movie = this.movieService.findMovie(id);

    this.movieService.findMovie(
      id,
      data=>{
        this.movie = data;
      },
      errorMessage=>{
        alert(errorMessage);
      }
    );
  }

}
