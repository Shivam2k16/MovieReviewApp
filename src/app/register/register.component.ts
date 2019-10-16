import { Component, OnInit } from '@angular/core';
import { LoginApiService, TokenPayload } from '../login-api.service';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private auth: LoginApiService, private router: Router, private tost:ToastrService) { }

  ngOnInit() {
  }
  angForm: FormGroup;

  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };
  error;
  register() {
    this.error='';
    console.log(this.credentials,"fass");
    if(this.credentials.email.includes('@')&&this.credentials.name&&this.credentials.password){

      this.auth.register(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/dashboard');
      }, (err) => {
        this.error="Enter proper name, email amd password!";
      });
    }
    else{
      this.error="Enter proper name, email amd password!";
    }
    }
  
}
