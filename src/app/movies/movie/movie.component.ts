import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from './movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent implements OnInit {
  @Input() movies!: IMovie[];

  ngOnInit(): void {}
}
