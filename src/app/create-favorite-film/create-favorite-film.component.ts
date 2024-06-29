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

  favoritefilm: FavoriteFilm = new FavoriteFilm();
  
  constructor(private serviceFavoriteF: FavoriteFilmServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveFavoriteF(){
    this.serviceFavoriteF.createFavoriteF(this.favoritefilm).subscribe( data =>{
      console.log(data);
      this.goToFavoriteFList();
    },
    error => console.log(error));
  }

  goToFavoriteFList(){
    this.router.navigate(['/favoritefilm']);
  }
  
  onSubmit(){
    console.log(this.favoritefilm);
    this.saveFavoriteF();
  }
}
