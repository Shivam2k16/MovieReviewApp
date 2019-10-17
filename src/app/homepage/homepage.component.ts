import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private movieApi: MovieApiService, private router:Router) { }
  search_results;
  query;
  suggestions=[];
  Bookmarked;
  ngOnInit() {

    this.getBookmarks();
    for(var i=550;i<590;i++){
      this.movieApi.getSuggestions(i).subscribe((res)=>{
        if(res['poster_path']){
        this.suggestions.push(res);
        }
      });
    }
  }

  image_url='http://image.tmdb.org/t/p/w500/';

  getMovieReview(){
    this.movieApi.getMovieReview().subscribe((res)=>{
    console.log(res);
    
    });
  }
  
  getMovieSearch(query){
    if(localStorage.getItem(query)){
      this.search_results=JSON.parse(localStorage.getItem(query));
    }
    else{
    this.movieApi.getMovieSearch(query).subscribe((res)=>{
      console.log(res);
      this.search_results=res['results'];
      localStorage.setItem(query, JSON.stringify(this.search_results));
      });
    }
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


  bookmark(obj) {
    var i;
    if(this.Bookmarked)
    for (i = 0; i < this.Bookmarked.length; i++) {
        if (this.Bookmarked[i].id === obj.id) {
          console.log('booked');
            return true;
        }
    }

    return false;
}
}
