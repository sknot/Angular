import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { FormComponent } from './Components/form/form.component';
import { MovieDetailComponent } from './Components/movie-detail/movie-detail.component';
import { MovieUpdateComponent } from './components/movie-update/movie-update.component';

const routes: Routes = [
{ path: '', redirectTo: '/list', pathMatch: 'full' },
{ path: 'list', component: MovieListComponent },
{ path: 'newMovie', component: FormComponent },
{ path: 'movieDetail/:id', component:MovieDetailComponent },
{ path: 'movieEdit/:id', component:MovieUpdateComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
