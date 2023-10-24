import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';
 
@Injectable({
  providedIn: 'root'
})
 
class PermissionsService  {
 
  constructor (private authService: AuthService,
    private router : Router) {}
 
 
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAdmin())
    return true;
  else {
    this.router.navigate(['app-forbidden']);
    return false;
  }
  }
 
}
 
export const VolGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService ).canActivate(next, state);
}