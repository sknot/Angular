import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';//para poder usar ngModel

import { AppComponent } from './app.component';
import { NewComponent } from './Componentes/new/new.component';
import { CabeceraComponent } from './Componentes/cabecera/cabecera.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { ResumenComponent } from './Componentes/resumen/resumen.component';
import { BandejaEntradaComponent } from './Componentes/bandeja-entrada/bandeja-entrada.component';
import { PiePagComponent } from './Componentes/pie-pag/pie-pag.component';
import { MoviesComponent } from './Componentes/movies/movies.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    CabeceraComponent,
    PerfilComponent,
    FormularioComponent,
    ResumenComponent,
    BandejaEntradaComponent,
    PiePagComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
