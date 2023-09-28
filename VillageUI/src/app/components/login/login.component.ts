import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  messageclass = '';
  message = '';
  Customerid: any;
  editdata: any;
  responsedata: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    localStorage.clear();
  }
  Login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  ProceedLogin() {
    if (this.Login.valid) {
      this.authService.ProceedLogin(this.Login.value).subscribe(
        (result: any) => {
          if (result != null) {
            localStorage.setItem('token', result.token);
            this.toastr.success('Login successful!', 'Success');
            this.router.navigate(['all-houses']);
          } else {
            this.toastr.error(
              'Login failed. Please check your credentials.',
              'Error'
            );
          }
        },
        (error) => {
          this.toastr.error(
            'An error occurred while trying to log in.',
            'Error'
          );
        }
      );
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }
}
