import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderMovieService } from '../providers/provider-movie.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.page.html',
  styleUrls: ['./single-movie.page.scss'],
})
export class SingleMoviePage implements OnInit {

  idMovie = null;
  movie;

  constructor(
    public provider:ProviderMovieService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idMovie = this.activatedRoute.snapshot.paramMap.get('id');
    this.provider.getSingleMovie(this.idMovie)
    .subscribe(
      (data)=>{
        this.movie = data;
      },
      (err)=>{console.log(err)}
    )
  }

}
