export class DatosUsuario
{
    _id:string
    Foto:string
    Otros:string
    GustosHobies:string
    Domicilio:string
    Correo:string
    Nombre:string
    Usuario:string
    Contrasena:string

    constructor()
    {
        this._id = '';
        this.Foto = '';
        this.Otros = '';
        this.GustosHobies = '';
        this.Domicilio = '';
        this.Correo = '';
        this.Nombre = '';
        this.Usuario = '';
        this.Contrasena = '';
    }
}

export class ContactosModel
{
    _id:string
    Telefono:string
    Nombre:string

    constructor()
    {
        this._id = '';
        this.Telefono = '';
        this.Nombre = '';
    }
}