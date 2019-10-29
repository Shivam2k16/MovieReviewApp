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

  search_results;
  query;
  suggestions=[];
  Bookmarked;

  image_url='http://image.tmdb.org/t/p/w500/';
  constructor(private movieApi: MovieApiService, private router:Router) { }

  ngOnInit() {
    this.getBookmarks();
    for(var i=550;i<565;i++){
      this.movieApi.getSuggestions(i).subscribe((res)=>{
        if(res['poster_path']){
        this.suggestions.push(res);
        }
      });
    }
  }


  getMovieReview(){
    this.movieApi.getMovieReview().subscribe((res)=>{
    console.log(res);
    
    });
  }
  
  getMovieSearch(query){
    console.log(this.suggestions,'suggetstttttt');
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

  

  bookmarkedTrue(result){
    return false;
  //   if(this.search_results){
  //     for(var i = 0; i < this.search_results.length; i++) {
  //       if (this.search_results[i].id == result.id) {
  //           return true;
  //       }
  //   }
  // }
}
    //   if(this.search_results.filter(e => e.id === result.id ).length > 0){
    //     return true;
    //     }
    //     else{
    //       return false;
    //     }
    // }
    // if(this.suggestions.some(e => e.id === result.id )){
    //   return true;
    //   }
    //   else{
    //     return false;
    //   }
  

  
}
