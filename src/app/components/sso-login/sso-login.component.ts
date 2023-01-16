import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sso-login',
  templateUrl: './sso-login.component.html',
  styleUrls: ['./sso-login.component.css']
})
export class SsoLoginComponent implements OnInit {

  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    document.getElementById("sidebar")!.style.display = "none";
   
  }
  openLogin()
  {}
  login() {
    let user={
      'userName': (<HTMLInputElement>document.getElementById('userName')).value,
       'password': (<HTMLInputElement>document.getElementById('password')).value
    }
    this.authService.login(user);
    // this.router.navigate(['/payee-registration']);
  }
}
