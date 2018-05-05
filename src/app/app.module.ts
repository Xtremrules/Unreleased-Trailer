import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { MoviesComponent } from './movies/movies.component';
import { LikedMoviesComponent } from './user/liked-movies/liked-movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { AddImageComponent } from './movies/movie/add-image/add-image.component';
import { ImagesComponent } from './movies/movie/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    UserComponent,
    MoviesComponent,
    LikedMoviesComponent,
    MovieComponent,
    AddMovieComponent,
    AddImageComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
