import { Component } from '@angular/core';
import { ProviderMovieService } from '../providers/provider-movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movies;
  movieSearch;
  title:string;
  stmovie;
  constructor(
    private provider:ProviderMovieService,
    private router: Router
  ) {
    this.title = "N E T F L I M";
  }

  ngOnInit() {    
    this.callInit();
  }

  goSingleMovie(idMovie){
    this.router.navigate(['/singleMovie',idMovie])
  }

  searchMovie(event) {
    if(!event.target.value) {
      this.callInit();
    } else {
      if(this.stmovie) clearTimeout(this.stmovie);
      this.stmovie = setTimeout(()=>{
        this.callSearch(event.target.value);
      },500);
    }
  }
  callInit(){
    this.provider.getTrending()
    .subscribe(
      (data)=>{
        let { results } = data;
        this.movies = results;
      },
      (err)=>{console.log(err)}
    )
  }

  callSearch(name){
    this.provider.getSearchMovie(name)
    .subscribe(
      (data)=>{
        var { results } = data;
        this.movies = results;
      },
      (err)=>{console.log(err)}
    )
  }
  
}
