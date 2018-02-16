import { Component } from '@angular/core';

import { CabeceraComponent } from './Components/cabecera/cabecera.component';
import { PiePagComponent } from './Components/pie-pag/pie-pag.component';
import { LoginComponent } from './Components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
