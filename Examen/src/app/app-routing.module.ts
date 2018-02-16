import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'

import { CabeceraComponent } from './Components/cabecera/cabecera.component';
import { PiePagComponent } from './Components/pie-pag/pie-pag.component';
import { LoginComponent } from './Components/login/login.component';
import { MiPerfilComponent } from './Components/mi-perfil/mi-perfil.component';
import { ContactosComponent } from './Components/contactos/contactos.component';
import { NuevoContactoComponent } from './Components/nuevo-contacto/nuevo-contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'mi_perfil/:id', component:MiPerfilComponent },
  { path: 'contactos/:id', component:ContactosComponent },
  { path: 'nuevo_contacto/:id/:_id', component:NuevoContactoComponent }
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
