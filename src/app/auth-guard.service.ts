import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';
import { LoginApiService } from './login-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: LoginApiService, private router: Router) {}

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}