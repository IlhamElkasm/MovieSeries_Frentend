import { Component, OnInit } from '@angular/core';
import { FavoriteFilm } from '../Model/FavoriteFilm'; 
import { FavoriteFilmServiceService } from '../Service/favorite-film-service.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-favorite-film',
  templateUrl: './create-favorite-film.component.html',
  styleUrls: ['./create-favorite-film.component.css']
})
export class CreateFavoriteFilmComponent implements OnInit {

  favoriteFilm: FavoriteFilm = new FavoriteFilm();
  
  constructor(private favoriteFilmService: FavoriteFilmServiceService, private router: Router) { }

  ngOnInit(): void {
    this.favoriteFilm.idUser = 1; // Set the user ID to 1
  }

  saveFavoriteF(): void {
    this.favoriteFilmService.createFavoriteF(this.favoriteFilm).subscribe((data: any) => {
      console.log(data);
      this.goToFavoriteFList();
    },
    (error: any) => console.log(error));
  }

  goToFavoriteFList(): void {
    this.router.navigate(['/favoriteFilm']);
  }
  
  onSubmit(): void {
    console.log(this.favoriteFilm);
    this.saveFavoriteF();
  }
}
