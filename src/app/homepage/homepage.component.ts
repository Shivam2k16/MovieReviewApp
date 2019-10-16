import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private movieApi: MovieApiService) { }
  search_results;
  query;
  suggestions=[];
  ngOnInit() {

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
  }

}
