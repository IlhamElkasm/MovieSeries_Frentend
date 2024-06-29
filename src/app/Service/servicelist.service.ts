import { Injectable } from '@angular/core';
import { Film } from '../Model/film';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicelistService {
  [x: string]: any;

  private baseURL = "http://localhost:8090/api/Films";

  constructor(private httpClient: HttpClient) { }
  
  getFilmList(): Observable<Film[]>{
    return this.httpClient.get<Film[]>(`${this.baseURL}`);
  }


}





