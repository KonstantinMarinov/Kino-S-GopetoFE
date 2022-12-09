import { MovieModule } from '../movies/movies.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [MovieModule],
  exports: [MovieModule],
  providers: [],
})
export class SharedModule {}
