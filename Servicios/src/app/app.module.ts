import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SermovieService } from './sermovie.service';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieComponent } from './components/movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SermovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
