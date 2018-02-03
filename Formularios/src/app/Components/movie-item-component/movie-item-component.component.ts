import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../../Models/MovieModel';

@Component({
  selector: 'app-movie-item-component',
  templateUrl: './movie-item-component.component.html',
  styleUrls: ['./movie-item-component.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: MovieModel;

  @Input() directorInput: String;
  
  @Input() categoriaInput: String;

  constructor() { }

  ngOnInit() {
  }

}
