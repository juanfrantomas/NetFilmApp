import { Component } from '@angular/core';
import { ProviderMovieService } from '../providers/provider-movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  protected movies;
  protected title:string;
  constructor(
    public provider:ProviderMovieService,
    private router: Router
  ) {
    this.title = "NetFilmApp";
  }

  ngOnInit() {
    this.provider.getTrending()
    .subscribe(
      (data)=>{
        var { results } = data;
        this.movies = results;
      },
      (err)=>{console.log(err)}
    )
  }

  goSingleMovie(idMovie){
    this.router.navigate(['/singleMovie',idMovie])
  }
}
