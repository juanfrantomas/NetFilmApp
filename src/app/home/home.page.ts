import { Component } from '@angular/core';
import { ProviderMovieService } from '../providers/provider-movie.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  protected movies;
  protected title:string;
  constructor(public provider:ProviderMovieService) {
    this.title = "NetFilmApp";
  }

  ngOnInit() {
    this.provider.getTrending()
    .subscribe(
      (data)=>{
        this.movies = data;
      },
      (err)=>{console.log(err)}
    )
  }

}
