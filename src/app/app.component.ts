import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { VolService } from './services/vol.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vols1';
  constructor (public authService: AuthService,private volService : VolService, private router:Router) {}
  /*ngOnInit () {
    let isloggedin: any;
    let loggedUser:any;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }*/
    ngOnInit () {
      this.authService.loadToken();
      if (this.authService.getToken()==null || this.authService.isTokenExpired())
      this.router.navigate(['/login']);
      }
  onLogout(){
    this.authService.logout();
  }
}
