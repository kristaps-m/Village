import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //apiurl = 'https://localhost:44308/user/authenticate';
  apiurl = `${environment.apiUri}/api/Auth/login`;
  constructor(private http: HttpClient) {}

  ProceedLogin(UserCred: any) {
    console.log(UserCred);
    let x = this.http.post(this.apiurl, UserCred);
    console.log(x, 'this.http.post(this.apiurl, UserCred);');
    return x;
  }
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
  GetToken() {
    return localStorage.getItem('token') || '';
  }
  // HaveAccess() {
  //   var loggintoken = localStorage.getItem('token') || '';
  //   var _extractedtoken = loggintoken.split('.')[1];
  //   var _atobdata = atob(_extractedtoken);
  //   var _finaldata = JSON.parse(_atobdata);
  //   if (_finaldata.role == 'admin') {
  //     return true;
  //   } else {
  //     alert('you not having access');
  //     return false;
  //   }
  // }

  // constructor(private http: HttpClient) {}

  // apiurl = 'http://localhost:3000/user';

  RegisterUser(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  // GetUserbyCode(id: any) {
  //   return this.http.get(this.apiurl + '/' + id);
  // }
  // Getall() {
  //   return this.http.get(this.apiurl);
  // }
  // updateuser(id: any, inputdata: any) {
  //   return this.http.put(this.apiurl + '/' + id, inputdata);
  // }
  // getuserrole() {
  //   return this.http.get('http://localhost:3000/role');
  // }
  // isloggedin() {
  //   return sessionStorage.getItem('username') != null;
  // }
  // getrole() {
  //   return sessionStorage.getItem('role') != null
  //     ? sessionStorage.getItem('role')?.toString()
  //     : '';
  // }
  // GetAllCustomer() {
  //   return this.http.get('http://localhost:3000/customer');
  // }
  // Getaccessbyrole(role: any, menu: any) {
  //   return this.http.get(
  //     'http://localhost:3000/roleaccess?role=' + role + '&menu=' + menu
  //   );
  // }
}
