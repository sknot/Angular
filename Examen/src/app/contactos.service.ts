import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosUsuario, ContactosModel } from './Models/Modelo';

@Injectable()
export class ContactosService {

  constructor(
    private http:HttpClient
  ) { }

  getLogin(Usuario: string, Contrasena: string,
    success: (datos: DatosUsuario) => void, 
    error: (message: string) => void)
  {
    const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Usuarios/?query={"Usuario":"'+ Usuario +'","Contrasena":"' + Contrasena + '"}';

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0hrdDlZMlE4Zjo3ZDIzZjE1NDU2YTk0ZWU3OTc0MDI2YzhlMmUwNTFmOA==',
      'X-Kinvey-API-Version': '3'
    }

    this.http.get(
      url,
      {
        headers:headers
      }
    ).subscribe(
      data => {
        const datosUsuario: DatosUsuario[] = [];

        for (let datosJSON of data as Array<any>)
        {
          const dato:DatosUsuario = datosJSON;

          datosUsuario.push(dato);
        }

        success(datosUsuario[0]);
       }, 
      err => { 
        error("Ocurrió un error al consultar getLogin");
      });
  }

  getDatosUsuario(_Id: string,
    success: (datos: DatosUsuario) => void, 
    error: (message: string) => void)
  {
    const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Usuarios/' + _Id;

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0hrdDlZMlE4Zjo3ZDIzZjE1NDU2YTk0ZWU3OTc0MDI2YzhlMmUwNTFmOA==',
      'X-Kinvey-API-Version': '3'
    }

    this.http.get(
      url,
      {
        headers:headers
      }
    ).subscribe(
      data => {
        const datosUsuario:DatosUsuario = data as any;

        success(datosUsuario);
       }, 
      err => { 
        error("Ocurrió un error al consultar getDatosUsuario");
      });
  }

  getContactos(
    success: (contactosModel: ContactosModel[]) => void, 
    error: (message: string) => void)
  {
    const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Contactos';

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0hrdDlZMlE4Zjo3ZDIzZjE1NDU2YTk0ZWU3OTc0MDI2YzhlMmUwNTFmOA==',
      'X-Kinvey-API-Version': '3'
    }

    this.http.get(
      url,
      {
        headers:headers
      }
    ).subscribe(
      data => {

        const contactos: ContactosModel[] = [];

        for (let contactoJSON of data as Array<any>)
        {
          const contacto:ContactosModel = {
            _id: contactoJSON._id,
            Telefono: contactoJSON.Telefono,
            Nombre: contactoJSON.Nombre
          };

          contactos.push(contacto);
        }

        success(contactos);
      }, 
      err => { 
        error("Ocurrió un error al consultar getContactos");
      });
  }

  setContacto(
    contacto:ContactosModel,
    success: (contacto:ContactosModel) => void,
    error: (message: string) => void
  )
  {

    const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Contactos/';

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0hrdDlZMlE4Zjo3ZDIzZjE1NDU2YTk0ZWU3OTc0MDI2YzhlMmUwNTFmOA==',
      'X-Kinvey-API-Version': '3'
    };

    let body = 
      {
        'Nombre': contacto.Nombre,
        'Telefono': contacto.Telefono
      };

     this.http.post(
      url,
      body,
      {
        headers:headers
      }
     ).subscribe(
      data => {

        const contactoJSON = data as any;

        const contactoReg:ContactosModel = contactoJSON;

        success(contactoReg);

       }, 
      err => { 
        error("Ocurrió un error al consultar setContacto");
      });

  }

  deleteContacto(
    contacto:ContactosModel,
    success: () => void,
    error: (message: string) => void
  )
  {
    const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Contactos/' + contacto._id;

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0hrdDlZMlE4Zjo3ZDIzZjE1NDU2YTk0ZWU3OTc0MDI2YzhlMmUwNTFmOA==',
      'X-Kinvey-API-Version': '3'
    };

    this.http.delete(
      url,
      {
        headers:headers
      }
    ).subscribe(
        data => {
          success();
        },
        err => {
          error("Ocurrió un error al consultar deleteContacto");
        }
      )
  }

  getContacto(id: string,
    success: (contacto:ContactosModel) => void, 
    error: (message: string) => void
  )
  {
    const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Contactos/' + id;
  
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0hrdDlZMlE4Zjo3ZDIzZjE1NDU2YTk0ZWU3OTc0MDI2YzhlMmUwNTFmOA==',
      'X-Kinvey-API-Version': '3'
    }
  
    this.http.get(
      url,
      {
        headers:headers
      }
    ).subscribe(
      data => {
  
        const contactoJSON = data as any;
  
        success(contactoJSON);
  
       }, 
      err => { 
        error("Ocurrió un error al consultar getContacto");
      });
  }

  updateContacto(
    contacto:ContactosModel,
    success: (contacto:ContactosModel) => void, 
    error: (message: string) => void
  )
  {
    const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Contactos/' + contacto._id;

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0hrdDlZMlE4Zjo3ZDIzZjE1NDU2YTk0ZWU3OTc0MDI2YzhlMmUwNTFmOA==',
      'X-Kinvey-API-Version': '3'
    };

    let body = 
      {
        'Nombre': contacto.Nombre,
        'Telefono': contacto.Telefono
      };

     this.http.put(
      url,
      body,
      {
        headers:headers
      }
     ).subscribe(
      data => {

        const contactoJSON = data as any;

        success(contactoJSON);

       }, 
      err => { 
        error("Ocurrió un error al consultar updateContacto");
      });
  }




}
