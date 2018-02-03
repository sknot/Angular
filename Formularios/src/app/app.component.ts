import { Component } from '@angular/core';
import { MoviesComponent } from './Components/movies/movies.component';
import { MovieItemComponent } from './Components/movie-item-component/movie-item-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
