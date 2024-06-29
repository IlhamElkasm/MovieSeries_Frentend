import { Component, OnInit } from '@angular/core';
import { FavoriteFilm } from '../Model/FavoriteFilm';
import { FavoriteFilmServiceService } from '../Service/favorite-film-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-film',
  templateUrl: './favorite-film.component.html',
  styleUrls: ['./favorite-film.component.css']
})
export class FavoriteFilmComponent implements OnInit {

  favoritefilm : FavoriteFilm[]= [];
  constructor(private serviceFavoriteF: FavoriteFilmServiceService,
     private router : Router ){}


  ngOnInit(): void {
    this.getFavoriteFList();
  }

  private getFavoriteFList(){
    this.serviceFavoriteF.getFavoriteFList().subscribe(data =>
      {
        this.favoritefilm= data;
      });
  }

 
  
}
