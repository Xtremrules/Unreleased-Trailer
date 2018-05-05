import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

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
}
