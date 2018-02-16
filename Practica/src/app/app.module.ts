import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movie.service';
import { MovieRemoteService } from './movie-remote.service';

import { FormComponent } from './Components/form/form.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { MovieItemComponent } from './Components/movie-item/movie-item.component';
import { MovieDetailComponent } from './Components/movie-detail/movie-detail.component';
import { MovieUpdateComponent } from './components/movie-update/movie-update.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MovieUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    MovieRemoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
