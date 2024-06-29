import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowFilmComponent } from './show-film/show-film.component';
import { SerieComponent } from './serie/serie.component';

const routes: Routes = [

    {path:'filmsAffiche', component: ShowFilmComponent},
    {path:'serieAffiche', component: SerieComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
