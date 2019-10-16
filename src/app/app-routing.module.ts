import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SuggestComponent } from './suggest/suggest.component';
import { AuthGuardService } from './auth-guard.service';

import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';

const routes: Routes = [
	{
    path: 'bookmark',
    component: BookmarkComponent
    ,canActivate: [AuthGuardService],
    children:
    [{
      path: '**', redirectTo: 'dashboard'
    }]
  },
  {
    path: 'suggest',
    component: SuggestComponent ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'upcoming',
    component: UpcomingMoviesComponent ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
