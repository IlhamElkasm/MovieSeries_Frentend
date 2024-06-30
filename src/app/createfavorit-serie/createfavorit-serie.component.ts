import { Component } from '@angular/core';
import { FavoriteSerie } from '../Model/FavoriteSerie';
import { FavoriteSerieService } from '../Service/favorite-serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createfavorit-serie',
  templateUrl: './createfavorit-serie.component.html',
  styleUrls: ['./createfavorit-serie.component.css']
})
export class CreatefavoritSerieComponent {

  
  favoriteSerie: FavoriteSerie = new FavoriteSerie();
  
  constructor(private favoriteSerieService: FavoriteSerieService, private router: Router) { }

  ngOnInit(): void {
    this.favoriteSerie.idUser = 1; // Set the user ID to 1
  }

  saveFavoriteS(): void {
    this.favoriteSerieService.createFavoriteS(this.favoriteSerie).subscribe((data: any) => {
      console.log(data);
      this.goToFavoriteSList();
    },
    (error: any) => console.log(error));
  }

  goToFavoriteSList(): void {
    this.router.navigate(['/favoriteSerie']);
  }
  
  onSubmit(): void {
    console.log(this.favoriteSerie);
    this.saveFavoriteS();
  }
}
