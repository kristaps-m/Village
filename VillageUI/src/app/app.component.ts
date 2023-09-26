import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loggedInUserName: string = '';
  userRole: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem('token');

    if (token) {
      // Decode the JWT token to extract the custom claims
      const tokenPayload = this.parseJwt(token);

      if (tokenPayload) {
        this.loggedInUserName =
          tokenPayload[
            'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
          ];
        this.userRole =
          tokenPayload[
            'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
          ];
      }
    }
    // if (localStorage.getItem('token') == null) {
    //   this.loggedInUserName = '';
    //   this.userRole = '';
    // }
  }

  // Function to parse a JWT token
  private parseJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64));
  }
}
