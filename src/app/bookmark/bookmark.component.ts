import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  Bookmarked;
  constructor( private movieApi:MovieApiService) { }

  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks(){
    this.movieApi.getBookmark().subscribe((res)=>{
    console.log(res);
    this.Bookmarked=res;
    });
  }
}
