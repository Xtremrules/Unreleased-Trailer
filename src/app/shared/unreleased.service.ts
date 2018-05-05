import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class UnreleasedService {

  constructor(private http: HttpClient) { }

  private url = environment.APIurl;

  getMovies() {
    return this.http.get(this.url + '/movies');
  }

  getMovie(id: number) {
    return this.http.get(this.url + '/movies/' + id);
  }

  // getImages(id: number) {
  //   return this.http.get(this.url + '/images/' + id);
  // }

  getImages(id: number) {
    return this.http.get(this.url + '/movies/' + id + '/images');
  }

  getLiked(userid: string) {
    return this.http.get(this.url + '/liked-number/' + userid);
    // return this.http.get(this.url + '/liked-number?userid=' + userid);
  }

  addLiked(movieid: number, userid: string) {
    const body = {
      MovieID: movieid,
      UserID: userid
    };
    return this.http.post(this.url + '/movies/add-liked', body);
  }

  postMovie(body: Movie) {
    return this.http.post(this.url + '/movies', body);
  }

  editMovie(body: Movie, id: number) {
    return this.http.put(this.url + '/movies/' + id, body);
  }
}
