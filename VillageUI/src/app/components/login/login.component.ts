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
    private route: Router,
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
      this.authService.ProceedLogin(this.Login.value).subscribe((result) => {
        if (result != null) {
          this.responsedata = result;
          localStorage.setItem('token', this.responsedata.token);
          this.route.navigate(['all-houses']);
        }
      });
    }
  }
}
