import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class ProviderMovieService {
  protected ApiKey :string;
  constructor(public http: HttpClient) {
   }

  getTrending(){
    return this.http.get(`${API_URL}trending/movie/day${API_KEY}`);
  }
}
