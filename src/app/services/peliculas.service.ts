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
    let url =`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(map(res=>res['results']));
  }
  
  getEnCartelera() {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() -15);
    let dateG = yesterday.getFullYear()+'-'+(yesterday.getMonth()+1)+'-'+yesterday.getDate();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 15);
    let dateL = tomorrow.getFullYear()+'-'+(tomorrow.getMonth()+1)+'-'+tomorrow.getDate();
    console.log(dateG);
    console.log(dateL);

    let url =`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&primary_release_date.gte=${dateG}&primary_release_date.lte=${dateL}&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(map(res=>res['results']));
 }

 getKids(){
  let url =`${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
  return this.http.get(url).pipe(map(res=>res['results']));
  }

  getFilm( id: string) {
    //https://api.themoviedb.org/3/movie/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;
    console.log(id);
    return this.http.get(url);
  }
}
