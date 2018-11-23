import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

interface myData{
  results: Object
}

@Injectable({
  providedIn: 'root'
})
export class ProviderMovieService {
  protected ApiKey :string;
  constructor(public http: HttpClient) {
   }

  getTrending(){
    return this.http.get<myData>(`${API_URL}trending/movie/day${API_KEY}`);
  }

  getSingleMovie(id){
    return this.http.get<myData>(`${API_URL}movie/${id}${API_KEY}`); 
  }

  getSearchMovie(name) {
    return this.http.get<myData>(`${API_URL}search/movie${API_KEY}&query=${name}`);
  }
}
