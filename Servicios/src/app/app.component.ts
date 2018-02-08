import { Component } from '@angular/core';
import { MovieComponent } from './Components/movie/movie.component';
import { MovieItemComponent } from './Components/movie-item/movie-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
