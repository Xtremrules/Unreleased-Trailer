import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { ToasterModule } from 'ngx-toaster/src/lib';

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
import { RouterModule } from '@angular/router';
import { appRoute } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';

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
    ImagesComponent,
    AdminDashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule, FormsModule, BrowserAnimationsModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
