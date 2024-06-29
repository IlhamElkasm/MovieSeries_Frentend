import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from '../Model/serie';

@Injectable({
  providedIn: 'root'
})
export class ServiceSerieService {

  [x: string]: any;

  private baseURL = "http://localhost:8090/api/serie";

  constructor(private httpClient: HttpClient) { }
  
  getSerieList(): Observable<Serie[]>{
    return this.httpClient.get<Serie[]>(`${this.baseURL}`);
  }
}
