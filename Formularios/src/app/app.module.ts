import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';//para poder usar ngModel

import { AppComponent } from './app.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { MovieItemComponent } from './Components/movie-item-component/movie-item-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
