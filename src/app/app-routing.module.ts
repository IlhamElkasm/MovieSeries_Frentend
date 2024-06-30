import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowFilmComponent } from './show-film/show-film.component';
import { SerieComponent } from './serie/serie.component';
import { CreateFavoriteFilmComponent } from './create-favorite-film/create-favorite-film.component';
import { FavoriteFilmComponent } from './favorite-film/favorite-film.component';
import { AfficherSerieComponent } from './afficher-serie/afficher-serie.component';
import { CreatefavoritSerieComponent } from './createfavorit-serie/createfavorit-serie.component';

const routes: Routes = [

    {path:'filmsAffiche', component: ShowFilmComponent},
    {path:'serieAffiche', component: SerieComponent},
    {path:'AjouterFavorite', component: ShowFilmComponent},
    { path: 'create-favorite-film', component: CreateFavoriteFilmComponent },
    { path: 'favoritefilm', component: FavoriteFilmComponent },
    { path: 'create-favorite-serie', component: CreatefavoritSerieComponent },
    { path: 'favoriteserie', component: AfficherSerieComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
