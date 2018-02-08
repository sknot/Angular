import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../Models/MovieModel';
//import { MovieService } from '../../movie.service';
import { MovieRemoteService } from '../../movie-remote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  movieModel:MovieModel = new MovieModel();

  constructor(
    //private movieService:MovieService,
    private movieService:MovieRemoteService,
    private route:Router
  ) { }

  ngOnInit() {
  }

  SaveMovie(){
      //this.MovieRemoteService.saveMovie(this.movieModel);
      this.movieService.saveMovie(
        this.movieModel,
        newMovie => {
          this.movieModel = new MovieModel();
          this.route.navigate(['\list']);
        },
        (message, statusCode) => {
          alert(message + ' - Error: ' + statusCode);
        }
      );
  }
}
