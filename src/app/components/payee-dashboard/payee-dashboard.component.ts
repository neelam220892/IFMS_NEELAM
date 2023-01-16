import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { UserSessions } from 'src/app/model/user';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'app-payee-dashboard',
  templateUrl: './payee-dashboard.component.html',
  styleUrls: ['./payee-dashboard.component.css']
})
export class PayeeDashboardComponent implements OnInit {
  UserSession: UserSessions = new UserSessions();
  config: AppConfig = new AppConfig();
  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.UserSession['Token'] = 'ZGHFGJKLKJKKLJKLJKKJKL';
    this.UserSession['UserName'] = 'ABC123';
    this.UserSession['UserNameHi'] = 'test';
    this.UserSession['SSOId'] = 'ABC123';
    this.UserSession['UserId'] = 121;
    this.UserSession['EmailId'] = 'test@gmailcom';
    this.UserSession['RoleId'] = 1;

  }

  redirectToRegistration(){
    const encryptuser: any =  this.config.encrypt(JSON.stringify(this.UserSession))
    localStorage.setItem('current_user', encryptuser);
    this.authService.login(this.UserSession['Token']);
  }

}
