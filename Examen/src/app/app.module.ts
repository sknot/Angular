import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactosService } from './contactos.service';

import { CabeceraComponent } from './Components/cabecera/cabecera.component';
import { PiePagComponent } from './Components/pie-pag/pie-pag.component';
import { LoginComponent } from './Components/login/login.component';
import { MiPerfilComponent } from './Components/mi-perfil/mi-perfil.component';
import { ContactosComponent } from './Components/contactos/contactos.component';
import { NuevoContactoComponent } from './Components/nuevo-contacto/nuevo-contacto.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ContactosItemComponent } from './Components/contactos-item/contactos-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePagComponent,
    LoginComponent,
    MiPerfilComponent,
    ContactosComponent,
    NuevoContactoComponent,
    MenuComponent,
    ContactosItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ContactosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
