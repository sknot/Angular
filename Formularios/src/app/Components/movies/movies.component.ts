import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../Models/MovieModel';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie:MovieModel = new MovieModel();
  
  constructor() { }

  ngOnInit() {
  }

}
