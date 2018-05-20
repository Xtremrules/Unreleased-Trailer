import { Component, OnInit } from '@angular/core';
import { UnreleasedService } from '../../shared/unreleased.service';
import { Movie } from '../../shared/movie.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  // now = Date.now();

  constructor(private unreleased: UnreleasedService, private router: Router) { }
  movie: Movie = {
    ID: 0,
    GenreID: 0,
    Title: '',
    Trailer_Url: '',
    Description: '',
    Director: '',
    Writer: '',
    Producer: '',
    // Release_Date: '',
    Created_Date: new Date().toLocaleDateString('short'),
  };

  ngOnInit() {
    this.Reset();
  }

  OnSubmit(movieForm: NgForm) {
    // console.log(new Date().toLocaleDateString('short'));
    this.unreleased.postMovie(movieForm.value).subscribe((data) => {
      this.Reset(movieForm);
      this.router.navigate(['/movies']);
    });
  }

  Reset(movieForm?: NgForm) {
    if (movieForm != null) {
      movieForm.reset();
    }
  }

}
