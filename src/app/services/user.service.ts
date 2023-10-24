import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { RoleWrapper } from '../model/RoleWrapped.model';
import { Role } from '../model/Role.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string= 'http://localhost:8081/users/api';
  apiURLRole: string = 'http://localhost:8081/users/role';

  users: User[] =[];
  
  constructor(private http:HttpClient,
    private authService:AuthService) { 

    }

    listeUser(): Observable<User[]>{
      let jwt =this.authService.getToken();
      jwt="Bearer "+jwt;
      let httpHeaders=new HttpHeaders({"Authorization":jwt})
      return this.http.get<User[]>(this.apiURL+"/all");
    }

    listeRole(id:number): Observable<Role[]>{
      const url = `${this.apiURL}/${id}/roles`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
      return this.http.get<Role[]>(url,{headers:httpHeaders});
    }

    
    listeRoles():Observable<RoleWrapper>{
      // return this.http.get<AeroportWrapper>(this.apiURLAir);
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<RoleWrapper>(this.apiURLRole,{headers:httpHeaders});
    }
    removeRoleFromUser(username:string,r:Role):Observable<User>
    {
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      const url=`${this.apiURL}/removeRoleFromUser/${username}`
      return this.http.post<User>(url,r, {headers:httpHeaders});
      
    }
    
    AddRoleForUser(username:string,r:Role):Observable<User>
    {
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      const url=`${this.apiURL}/addRole/${username}`
      return this.http.post<User>(url,r, {headers:httpHeaders});
      
    }

    
  ListOfusers():Observable<User[]>
  {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<User[]>(this.apiURL+"/all", {headers:httpHeaders});
    
    
  }
  consulterUser(id: number): Observable<User> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.apiURL} +/getbyid/${id}`;
    return this.http.get<User>(url,{headers:httpHeaders});
    }
  
    

  GetUserByUsername(username:string):Observable<User>
  {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url=`${this.apiURL}/findUserByUsername/${username}`
    return this.http.get<User>(url, {headers:httpHeaders});
  }
  ListOfRoles():Observable<Role[]>
  {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Role[]>(this.apiURL+"/allRoles", {headers:httpHeaders});
  }
  

    
}
