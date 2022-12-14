import { MovieHeroComponent } from './movie-hero/movie-hero.component';
import { MoviePageComponent } from './movie-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieRowComponent } from './movie-row/movie-row.component';

@NgModule({
  declarations: [
    MoviePageComponent,
    MovieHeroComponent,
    MovieRowComponent,
    MovieComponent,
  ],
  imports: [CommonModule],
  exports: [MoviePageComponent],
  providers: [],
})
export class MovieModule {}
