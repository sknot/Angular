import { Component, OnInit } from '@angular/core';
import { Movies } from '../../Models/Movies';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie:Movies = new Movies();

  constructor() { }

  ngOnInit() {
  }

}
