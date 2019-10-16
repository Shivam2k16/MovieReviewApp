import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  api_url='http://localhost:4000';
api_key='?api_key=48fa421e80cecda4db604b584cccc6d8';
url='https://api.themoviedb.org/3/movie/';
search_url='https://api.themoviedb.org/3/search/movie'+this.api_key+'&query=';
upcoming="https://api.themoviedb.org/3/movie/upcoming?api_key=48fa421e80cecda4db604b584cccc6d8";

constructor(private http: HttpClient) { }

getSuggestions(n){
return this
.http
.get(`${this.url+n}`+this.api_key);
}

getUpcoming(){

  return this
  .http
  .get(`${this.upcoming}`);
}

getMovieReview() {
    return this
           .http
           .get(`${this.url}`);
  }

  getMovieSearch(query){
    return this
           .http
           .get(`${this.search_url}`+query);
  }
  postBookmark(object){
    var obj={
      title:object.title,
      poster_path: object.poster_path,
      release_date: object.release_date,
      vote_average: object.vote_average,
      vote_count: object.vote_count
    };
    this.http.post(`${this.api_url}/add`,obj)
        .subscribe(()=>{
          console.log(obj,"this is done");
        });
  }

  getBookmark(){
    return this
           .http
           .get(`${this.api_url}`);
  }

}
