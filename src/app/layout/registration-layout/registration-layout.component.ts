import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-registration-layout',
  templateUrl: './registration-layout.component.html',
  styleUrls: ['./registration-layout.component.css']
})
export class RegistrationLayoutComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit() {
    var token =  localStorage.getItem('access_token');
    console.log(token)
    if(token !== null){
      this.router.navigate(['/payee-registration']);
    }else{
      this.router.navigate(['/dashboard']);
    }
  }
}
