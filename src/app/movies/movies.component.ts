import { Component, OnInit } from '@angular/core';
import { UnreleasedService } from '../shared/unreleased.service';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private unreleasedService: UnreleasedService) { }
  public movies: Movie[] = Array<Movie>();

  ngOnInit() {
    this.unreleasedService.getMovies().subscribe(data => {
      // debugger;
      this.movies = data;
      console.log(data);
    });
  }

}
