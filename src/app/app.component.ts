import { MovieService } from './movie/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
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

export interface IMovie {
  id: string;
  name: string;
  year: string;
  month: string;
  reviewUrl: string;
}
