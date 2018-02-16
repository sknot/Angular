import { Component, OnInit, Input } from '@angular/core';
import { ContactosModel } from '../../Models/Modelo';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactosService } from '../../contactos.service';

@Component({
  selector: 'app-contactos-item',
  templateUrl: './contactos-item.component.html',
  styleUrls: ['./contactos-item.component.css']
})
export class ContactosItemComponent implements OnInit {

  @Input() contacto:ContactosModel;
  id:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private contactosService:ContactosService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  deleteContacto()
  {
    this.contactosService.deleteContacto(
      this.contacto,
      () => {
        this.route.navigate(['/mi_perfil/' + this.id]);
      },
      errorMessage => {
        alert(errorMessage);
      });
  }

}
