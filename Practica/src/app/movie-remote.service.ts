import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieModel } from './Models/MovieModel';

@Injectable()
export class MovieRemoteService {

  constructor(
    private http:HttpClient
  ) { }

 //#region GetMovies 
 getMovies(
  success: (movie: MovieModel[]) => void, 
  error: (message: string) => void)
{
  const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Movies';

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
      const movies: MovieModel[] = [];

      for (let movieJSON of data as Array<any>)
      {
        const movie:MovieModel = {
          id:0,
          _id: movieJSON._id,
          title: movieJSON.Titulo,
          descripcion: movieJSON.Descripcion
        };

        movies.push(movie);
      }

      success(movies);

     }, 
    err => { 
      error("Ocurrió un error al consultar la lista de películas");
    });

}
 //#endregion

 //#region FindMovies
 findMovie(id: string,
  success: (movie: MovieModel) => void, 
  error: (message: string) => void)
{
  const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Movies/' + id;

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

      const movieJSON = data as any;

      const movie:MovieModel = {
          id:0,
          _id: movieJSON._id,
          title: movieJSON.Titulo,
          descripcion: movieJSON.Descripcion
        };

      success(movie);

     }, 
    err => { 
      error("Ocurrió un error al consultar la lista de películas");
    });
}
 //#endregion
  
 //#region SaveMovie
  saveMovie(
    movie: MovieModel,
    success: (movie: MovieModel) => void, 
    error: (message: string, statusCode: number) => void
  )
  {
    const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Movies/';

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0hrdDlZMlE4Zjo3ZDIzZjE1NDU2YTk0ZWU3OTc0MDI2YzhlMmUwNTFmOA==',
      'X-Kinvey-API-Version': '3'
    };

    let body = 
      {
        'Titulo': movie.title,
        'Descripcion': movie.descripcion
      };

     this.http.post(
      url,
      body,
      {
        headers:headers
      }
     ).subscribe(
      data => {

        const movieJSON = data as any;

        const movieReg:MovieModel = {
            id:0,
            _id: movieJSON._id,
            title: movieJSON.Titulo,
            descripcion: movieJSON.Descripcion
          };

        success(movieReg);

       }, 
      err => { 
        error("Ocurrió un error al consultar la lista de películas", 400);
      });
      
    }
  //#endregion
  
  //#region UpdateMovie
   updateMovie(
    movie: MovieModel,
    success: (movie: MovieModel) => void, 
    error: (message: string, statusCode: number) => void)
  {
    const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Movies/' + movie._id;

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0hrdDlZMlE4Zjo3ZDIzZjE1NDU2YTk0ZWU3OTc0MDI2YzhlMmUwNTFmOA==',
      'X-Kinvey-API-Version': '3'
    };

    let body = 
      {
        'Titulo': movie.title,
        'Descripcion': movie.descripcion
      };

     this.http.put(
      url,
      body,
      {
        headers:headers
      }
     ).subscribe(
      data => {

        const movieJSON = data as any;

        const movieReg:MovieModel = {
            id:0,
            _id: movieJSON._id,
            title: movieJSON.Titulo,
            descripcion: movieJSON.Descripcion
          };

        success(movieReg);

       }, 
      err => { 
        error("Ocurrió un error al actualizar la pelicula", 400);
      });
  }
  //#endregion

  //#region DeteMovie
  deleteMovie(
    movie: MovieModel,
    success: () => void,
    error: (message: string, statusCode: number) => void
  )
  {
    const url = 'https://baas.kinvey.com/appdata/kid_Hkt9Y2Q8f/Movies/' + movie._id;

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
          error("Ocurrió un error eliminar la pelicula", 400);
        }
      )
  }
  //#endregion
  

  


  

  

}
