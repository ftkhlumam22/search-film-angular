import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFilmService {

  urlapi = 'https://www.omdbapi.com/'
  apikey = 'b5cf04e7';

  constructor(private http:HttpClient) {

  }

  getMovie(title:string):Observable<object>{
    return this.http.get(this.urlapi + '?s=' + title + '&apikey=' + this.apikey)
  }

  getDetailMovie(id:string):Observable<object>{
    return this.http.get(this.urlapi + '?i=' + id + '&apikey=' + this.apikey)
  }
}
