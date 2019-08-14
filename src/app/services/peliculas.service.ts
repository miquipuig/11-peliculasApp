import { Injectable } from '@angular/core';


import { map, delay } from 'rxjs/operators';
import { HttpClient, HttpClientJsonpModule, JsonpClientBackend, JsonpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

private apikey:string = "9a5db3391a9e2f3731090d14d4bd6943";
private urlMoviedb:string = "https://api.themoviedb.org/3";
//https://api.themoviedb.org/3/movie/550?api_key=9a5db3391a9e2f3731090d14d4bd6943

  constructor( private jsonp:JsonpClientBackend, private http:HttpClient) {  }

  getPopulares(){
    let url =`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`
    return this.http.get(url).pipe(map(res=>res['results']));
    //.map(res=>res.json());

    //return this.http.get(`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`);
    //.pipe(map( //(res)=> res.json()
    //.pipe(map( (res)=> res));
 
   // return this.http.jsonp(`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`, "callback");
  }    
}
