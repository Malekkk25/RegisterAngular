import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur=0;
  err:number = 0;

  constructor(private authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

 /* onLoggedin(){
    console.log(this.user);
     let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
    this.router.navigate(['/']);
    else
    //alert('Login ou mot de passe incorrecte!');
    this.erreur = 1;
    }*/
    onLoggedin()
    {
    this.authService.login(this.user).subscribe({
    next: (data) => {
    let jwToken = data.headers.get('Authorization')!;
    this.authService.saveToken(jwToken);
    this.router.navigate(['/']); 
    },
    error: (err: any) => {
    this.err = 1; 
    }
    });
    }
    
}
