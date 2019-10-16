import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginApiService } from './login-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieReviewApp';
  
  constructor( private router:Router, private auth:LoginApiService){}
}
