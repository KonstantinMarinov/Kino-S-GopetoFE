import { MoviePageComponent } from './movie-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [MovieComponent, MoviePageComponent],
  imports: [CommonModule],
  exports: [MovieComponent, MoviePageComponent],
  providers: [],
})
export class MovieModule {}
