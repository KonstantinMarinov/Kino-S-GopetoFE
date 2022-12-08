import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie.interface';
import { MovieService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent implements OnInit {
  movies!: IMovie[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    console.log(this.movies);

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
