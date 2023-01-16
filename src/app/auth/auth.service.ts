import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }
  constructor(private router: Router) {}

  login(token:any){
    if(token != ''){
      localStorage.setItem('access_token', token);
      this.loggedIn.next(true);
      this.router.navigate(['/payee-registration']);
    }
  }

  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');
    this.loggedIn.next(false);
    this.router.navigate(['/dashboard']);
  }
}
