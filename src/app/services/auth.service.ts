import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Role } from '../model/Role.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
//  users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
// {"username":"malek","password":"123","roles":['USER']} ];




apiURL: string = 'http://localhost:8081/users';
public loggedUser!:string;
public isloggedIn: Boolean = false;
public roles!:string[];
private helper = new JwtHelperService();
token!:string;
  constructor(private router: Router,
            private http:HttpClient
              ) { }

  login(user : User)
    {
    return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
  }
  saveToken(jwt:string){
  localStorage.setItem('jwt',jwt);
  this.token = jwt;
  this.isloggedIn = true; 
  this.decodeJWT();
  }
 
    getToken():string {
    return this.token;
    }
    loadToken() {
      this.token = localStorage.getItem('jwt')!;
      this.decodeJWT();
      }
      isTokenExpired(): Boolean
      {
      return this.helper.isTokenExpired(this.token); }  
 /*logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
    }*/
    logout() {
      this.loggedUser = undefined!;
      this.roles = undefined!;
      this.token= undefined!;
      this.isloggedIn = false;
      localStorage.removeItem('jwt');
      this.router.navigate(['/login']);
      }
      

   /* SignIn(user :User):Boolean{
      let validUser: Boolean = false;
      this.users.forEach((curUser) => {
      if(user.username== curUser.username && user.password==curUser.password) {
      validUser = true;
      this.loggedUser = curUser.username;
      this.isloggedIn = true;
      this.roles = curUser.roles;
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
      });
      return validUser;
      }*/
     /* isAdmin():Boolean{
        if (!this.roles) //this.roles== undefiened
        return false;
        return (this.roles.indexOf('ADMIN') >-1);
        } */
        isAdmin():Boolean{
          if (!this.roles)
          return false;
         return this.roles.indexOf('ADMIN') >=0;
         }
         
        setLoggedUserFromLocalStorage(login : string) {
          this.loggedUser = login;
          this.isloggedIn = true;
          // this.getUserRoles(login);
          }
          /*getUserRoles(username :string){
          this.users.forEach((curUser) => {
          if( curUser.username == username ) {
          this.roles = curUser.roles;
          }
          });
          }  */
          decodeJWT()
{ if (this.token == undefined)
 return;
const decodedToken = this.helper.decodeToken(this.token);
this.roles = decodedToken.roles;
this.loggedUser = decodedToken.sub;
console.log("roles"+this.roles);
}
register(username: string, email: string, password: string): Observable<any> {
  return this.http.post(
    this.apiURL + '/register',
    {
      username,
      email,
      password,
    },
    httpOptions
  );
}
deleteUser(id: number) {
  let jwt=this.getToken();
  jwt="Bearer "+jwt;
  let httpHeaders=new HttpHeaders({"Authorization":jwt})
  const url=`${this.apiURL}/api/deleteUserById/${id}`
  return this.http.delete(url,{headers:httpHeaders});
  }


}
