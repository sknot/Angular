import { Component, OnInit } from '@angular/core';
import { DatosUsuario } from '../../Models/Modelo';
import { ContactosService } from '../../contactos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pie-pag',
  templateUrl: './pie-pag.component.html',
  styleUrls: ['./pie-pag.component.css']
})
export class PiePagComponent implements OnInit {

  datosUsuario:DatosUsuario;

  constructor(
    private contactosService:ContactosService,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.datosUsuario = new DatosUsuario();

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.contactosService.getDatosUsuario(id,
      data => {
        this.datosUsuario = data;
    },
    errorMessage=>{
      alert(errorMessage);
    });
  }
}
