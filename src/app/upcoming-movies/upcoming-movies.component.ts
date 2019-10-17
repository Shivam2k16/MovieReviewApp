import { Component, OnInit } from '@angular/core';

import { MovieApiService } from '../movie-api.service';
@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {

  constructor(private movieApi:MovieApiService) { }

  upcoming=[];
  Bookmarked;
  image_url='http://image.tmdb.org/t/p/w500/';
  
  ngOnInit() {
    this.getUpcoming();
  }
  getUpcoming(){
    if(localStorage.getItem('upcoming')){
      this.upcoming=JSON.parse(localStorage.getItem('upcoming'));
    }
    else{
      this.movieApi.getUpcoming().subscribe((res)=>{
        this.upcoming=res['results'];
        localStorage.setItem('upcoming', JSON.stringify(this.upcoming));
        console.log(this.upcoming,"upresults");
      });
    }
  }

   sort(arg){
    this.upcoming.sort((a,b) => (a[arg] > b[arg]) ? 1 : ((b[arg] > a[arg]) ? -1 : 0));
   }
  

  postBookmark(object){
    this.movieApi.postBookmark(object);
    this.getBookmarks();
  }

  getBookmarks(){
    this.movieApi.getBookmark().subscribe((res)=>{
    this.Bookmarked=res;
    });
  }

}
