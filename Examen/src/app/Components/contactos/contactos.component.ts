import { Component, OnInit } from '@angular/core';
import { ContactosItemComponent } from '../contactos-item/contactos-item.component';
import { ContactosService } from '../../contactos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactosModel } from '../../Models/Modelo';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contactosModel:ContactosModel[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private contactosService:ContactosService
  ) { }

  ngOnInit() {

    this.contactosModel = [];

    this.contactosService.getContactos(
      data => {
        this.contactosModel = data;
      },
      errorMessage => {
        alert(errorMessage);
      }
    );

  }

}
