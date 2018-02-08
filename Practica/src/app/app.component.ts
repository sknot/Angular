import { Component } from '@angular/core';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { FormComponent } from './Components/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
