import { Component, OnInit } from '@angular/core';
import { LoginApiService, TokenPayload } from '../login-api.service';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };
  error;
  constructor(private auth:LoginApiService, private router:Router, private tost:ToastrService) { }
  
  ngOnInit() {
  }
  login() {
    this.error='';
    this.auth.login(this.credentials).subscribe((res) => {
      console.log(res,"wpw");
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      this.error="Invalid email or password!"
    }); 
  }

}
