import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../Models/MovieModel';
//import { MovieService } from '../../movie.service';
import { MovieRemoteService } from '../../movie-remote.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {
  
  movie:MovieModel;

  constructor(
   private activatedRoute:ActivatedRoute,
   //private movieService:MovieService
   private movieService:MovieRemoteService,
   private route:Router
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

  UpdateMovie(){
    //this.MovieRemoteService.saveMovie(this.movieModel);
    this.movieService.updateMovie(
      this.movie,
      newMovie => {
        this.movie = new MovieModel();
        this.route.navigate(['\list']);
      },
      (message, statusCode) => {
        alert(message + ' - Error: ' + statusCode);
      }
    );
}

}
