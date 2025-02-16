import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteFilm } from '../Model/FavoriteFilm';

@Injectable({
  providedIn: 'root'
})
export class FavoriteFilmServiceService {

  private baseURLC = "http://localhost:8090/api/favoriteFilm";
 

  constructor(private httpClient: HttpClient) { }
  
  getFavoriteFList(): Observable<FavoriteFilm[]>{
    return this.httpClient.get<FavoriteFilm[]>(`${this.baseURLC}`);
  }
  
  createFavoriteF(favoritefilm: FavoriteFilm): Observable<Object>{
    return this.httpClient.post(`${this.baseURLC}/add`, favoritefilm);
  }


}
