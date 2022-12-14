import { Component } from '@angular/core';
import { IMovie } from './movie/movie.interface';
import { MovieService } from './movies.service';

@Component({
  templateUrl: './movie-page.component.html',
  selector: 'app-movie-page',
})
export class MoviePageComponent {
  movies: IMovie[] = [
    {
      id: 'testId',
      name: 'testName',
      month: 'testMonth',
      year: 'testYear',
      reviewUrl: 'testUrl',
    },
    {
      id: 'testId',
      name: 'testName',
      month: 'testMonth',
      year: 'testYear',
      reviewUrl: 'testUrl',
    },
    {
      id: 'testId',
      name: 'testName',
      month: 'testMonth',
      year: 'testYear',
      reviewUrl: 'testUrl',
    },
  ];

  movie: IMovie = this.movies[0];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    console.log(this.movie);

    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe({
      next: (response) => {
        this.movies = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
