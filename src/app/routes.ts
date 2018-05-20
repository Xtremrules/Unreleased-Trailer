import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { LikedMoviesComponent } from './user/liked-movies/liked-movies.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { MovieComponent } from './movies/movie/movie.component';
import { ImagesComponent } from './movies/movie/images/images.component';
import { AddImageComponent } from './movies/movie/add-image/add-image.component';

export const appRoute: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'profile', component: UserComponent, children: [
      { path: 'liked-movies', component: LikedMoviesComponent }
    ]
  },
  { path: 'movies/:id/images/add', component: AddImageComponent },
  { path: 'movies/:id/images', component: ImagesComponent },
  { path: 'movies/add', component: AddMovieComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];
