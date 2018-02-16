import { Component, OnInit } from '@angular/core';
import { DatosUsuario } from '../../Models/Modelo';
import { ContactosService } from '../../contactos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datosUsuario:DatosUsuario;
  usuario:string;
  password:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private contactosService:ContactosService
  ) { }

  ngOnInit() {
  }

  OnClick_Login()
  {
    this.datosUsuario = new DatosUsuario();

    this.contactosService.getLogin(
      this.usuario, 
      this.password,
      data => {
        if(typeof(data) === 'undefined')
        {
          alert("Usuario o contraseña incorrectos, favor de validar");
        }
        else
        {
          this.datosUsuario = data;
          this.route.navigate(['/mi_perfil/' + data._id]);
        }
      },
      errorMessage=>{
        alert(errorMessage);
      }
    )
  }
}
