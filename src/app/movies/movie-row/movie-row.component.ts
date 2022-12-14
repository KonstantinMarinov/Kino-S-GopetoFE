import { Component } from '@angular/core';
import { IMovie } from '../movie/movie.interface';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
})
export class MovieRowComponent {
  movies: IMovie[] = [
    {
      id: '1',
      name: 'Movie 1',
      month: 'January',
      year: '2022',
      reviewUrl: 'empty',
    },
    {
      id: '2',
      name: 'Movie 2',
      month: 'February',
      year: '2022',
      reviewUrl: 'empty',
    },
    {
      id: '3',
      name: 'Movie 3',
      month: 'March',
      year: '2022',
      reviewUrl: 'empty',
    },
    {
      id: '4',
      name: 'Movie 4',
      month: 'April',
      year: '2022',
      reviewUrl: 'empty',
    },
    {
      id: '5',
      name: 'Movie 5',
      month: 'May',
      year: '2022',
      reviewUrl: 'empty',
    },
    {
      id: '6',
      name: 'Movie 6',
      month: 'July',
      year: '2022',
      reviewUrl: 'empty',
    },
    {
      id: '7',
      name: 'Movie 7',
      month: 'August',
      year: '2022',
      reviewUrl: 'empty',
    },
  ];

    
}
