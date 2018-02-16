import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactosService } from '../../contactos.service';
import { ContactosModel } from '../../Models/Modelo';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent implements OnInit {

  id:string;
  _id:string;
  contacto:ContactosModel = new ContactosModel();

  constructor(
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private contactosService:ContactosService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');

    if(this._id != 'N')
    {
      this.contactosService.getContacto(
        this._id,
        data => {
          this.contacto = data;
        },
        errorMessage=>{
          alert(errorMessage);
        }
      )
    }
  }

  guardarContacto()
  {
    if(this._id === 'N')
    {
      this.contactosService.setContacto(this.contacto,
        data => {
          this.contacto = new ContactosModel();
          alert("Contacto creado correctamente");
          this.route.navigate(['/contactos/' + this.id]);
        },
        errorMessage=>{
          alert(errorMessage);
        }
      );
    }
    else{
      this.contactosService.updateContacto(this.contacto,
        data => {
          this.contacto = new ContactosModel();
          alert("Contacto editado correctamente");
          this.route.navigate(['/contactos/' + this.id]);
        },
        errorMessage=>{
          alert(errorMessage);
        }
      );
    }
  }

}
