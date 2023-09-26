import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private httpRoute: Router) {}

  canActivate() {
    if (this.authService.IsLoggedIn()) {
      return true;
    } else {
      this.httpRoute.navigate(['login']);
      return true;
    }
  }
}