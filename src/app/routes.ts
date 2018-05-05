import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { LikedMoviesComponent } from './user/liked-movies/liked-movies.component';
import { MoviesComponent } from './movies/movies.component';

export const appRoute: Routes = [
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'profile', component: UserComponent},
    {path: 'profile/liked-movies', component: LikedMoviesComponent},
    {path: 'movies', component: MoviesComponent}
];
