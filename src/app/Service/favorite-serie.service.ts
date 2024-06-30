import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavoriteSerie } from '../Model/FavoriteSerie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteSerieService {

  private baseURLC = "http://localhost:8090/api/FavoriteSerie";
 

  constructor(private httpClient: HttpClient) { }
  
  getFavoriteSList(): Observable<FavoriteSerie[]>{
    return this.httpClient.get<FavoriteSerie[]>(`${this.baseURLC}`);
  }
  
  createFavoriteS(favoriteserie: FavoriteSerie): Observable<Object>{
    return this.httpClient.post(`${this.baseURLC}/add`, favoriteserie);
  }

}
