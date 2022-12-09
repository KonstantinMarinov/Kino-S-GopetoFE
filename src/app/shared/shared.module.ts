import { MovieModule } from '../movies/movies.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [MovieModule],
  providers: [MovieModule],
})
export class SharedModule {}
