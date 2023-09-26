import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
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
