import { Component, HostListener, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMenu:boolean=false;
  innerWidth: string | undefined;
  constructor(public authService: AuthService, public commonService: CommonService) { }

  ngOnInit(): void {

  }

  openMenu():void {
    document.getElementById("sidebar")!.style.display = "block";
  }

  onLogout(){
    this.authService.logout();
  }

  // ngOnChanges(changes:SimpleChange):void{
  //   console.log(changes.previousValue);
  //   console.log(this.showMenu);
  //   if(changes){
  //     console.log(changes.previousValue);
  //   }
  // }


  @HostListener('window:scroll', [])
    onWindowScroll(event: Event) {
        //set up the div "id=nav"
        if (document.body.scrollTop > 40 ||
            document.documentElement.scrollTop > 40) {
            document.getElementById('myHeader')!.classList.add('sticky');
        }
        else {
            document.getElementById('myHeader')!.classList.remove('sticky');
            this.innerWidth = 'auto';
        }
    }
}







