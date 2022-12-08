import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movie/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('https://localhost:7098/api/movies');
  }
}
