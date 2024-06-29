import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Film } from 'src/app/Model/film';
import { ServicelistService } from 'src/app/Service/servicelist.service';

@Component({
  selector: 'app-show-film',
  templateUrl: './show-film.component.html',
  styleUrls: ['./show-film.component.css']
})
export class ShowFilmComponent implements OnInit {

  films : Film[]= [];
  constructor(private servicelist: ServicelistService,
     private router : Router ){}


  ngOnInit(): void {
    this.getlistFilm();
  }

  private getlistFilm(){
    this.servicelist.getFilmList().subscribe(data =>
      {
        this.films= data;
      });
  }
  

}
