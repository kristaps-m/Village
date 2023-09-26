import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiurl = `${environment.apiUri}/api/Auth/login`;
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ProceedLogin(UserCred: any) {
    let x = this.http.post(`${environment.apiUri}/api/Auth/login`, UserCred);
    return x;
  }
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
  GetToken() {
    return localStorage.getItem('token') || '';
  }

  RegisterUser(inputdata: any) {
    return this.http.post(`${environment.apiUri}/api/Auth/register`, inputdata);
  }

  GetLogedInUserName() {
    return this.http.get(`${environment.apiUri}/api/Auth`);
  }
}
