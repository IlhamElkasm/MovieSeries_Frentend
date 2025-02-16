import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowFilmComponent } from './show-film/show-film.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SerieComponent } from './serie/serie.component';
import { FavoriteFilmComponent } from './favorite-film/favorite-film.component';
import { CreateFavoriteFilmComponent } from './create-favorite-film/create-favorite-film.component';
import { AfficherSerieComponent } from './afficher-serie/afficher-serie.component';
import { CreatefavoritSerieComponent } from './createfavorit-serie/createfavorit-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowFilmComponent,
    SerieComponent,
    FavoriteFilmComponent,
    CreateFavoriteFilmComponent,
    AfficherSerieComponent,
    CreatefavoritSerieComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch())

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
