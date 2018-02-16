import { Component, OnInit } from '@angular/core';
import { DatosUsuario } from '../../Models/Modelo';
import { ContactosService } from '../../contactos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  datosUsuario:DatosUsuario;

  constructor(
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private contactosService:ContactosService
  ) { }

  ngOnInit() {
    this.datosUsuario = new DatosUsuario();

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.contactosService.getDatosUsuario(id,
      data => {
      if(typeof(data) === 'undefined')
      {
        this.route.navigate(['']);
      }
      else
      {
        this.datosUsuario = data;
      }
    },
    errorMessage=>{
      alert(errorMessage);
    });
  }
}
