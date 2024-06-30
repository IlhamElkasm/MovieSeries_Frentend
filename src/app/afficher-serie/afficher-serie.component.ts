import { Component, OnInit } from '@angular/core';
import { FavoriteSerie } from '../Model/FavoriteSerie';
import { FavoriteSerieService } from '../Service/favorite-serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-serie',
  templateUrl: './afficher-serie.component.html',
  styleUrls: ['./afficher-serie.component.css']
})
export class AfficherSerieComponent implements OnInit {

  favoriteserie : FavoriteSerie[]= [];
  constructor(private serviceFavoriteS: FavoriteSerieService,
     private router : Router ){}


  ngOnInit(): void {
    this.getFavoriteSList();
  }

  private getFavoriteSList(){
    this.serviceFavoriteS.getFavoriteSList().subscribe(data =>
      {
        this.favoriteserie= data;
      });
  }


}
