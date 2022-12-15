import { Component } from '@angular/core';
import { IMovie } from '../movie/movie.interface';

@Component({
  selector: 'app-movie-hero',
  templateUrl: './movie-hero.component.html',
})
export class MovieHeroComponent {
  movie: IMovie = {
    id: 'testId',
    name: 'Harry Potter and The Deathly Hallows',
    month: 'August',
    year: '2022',
    reviewUrl: 'testUrl',
  };
}
