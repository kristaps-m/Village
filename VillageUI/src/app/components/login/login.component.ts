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

  constructor(private authService: AuthService, private route: Router) {
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
        console.log(result, 'login.component result');
        if (result != null) {
          this.responsedata = result;
          console.log(this.responsedata, 'this.responsedata');
          localStorage.setItem('token', this.responsedata.token);
          this.route.navigate(['all-houses']);
        }
      });
    }
  }

  // constructor(
  //   private builder: FormBuilder,
  //   private toastr: ToastrService,
  //   private service: AuthService,
  //   private router: Router
  // ) {
  //   sessionStorage.clear();
  // }
  // result: any;

  // loginform = this.builder.group({
  //   id: this.builder.control('', Validators.required),
  //   password: this.builder.control('', Validators.required),
  // });

  // proceedlogin() {
  //   if (this.loginform.valid) {
  //     this.service.GetUserbyCode(this.loginform.value.id).subscribe((item) => {
  //       this.result = item;
  //       if (this.result.password === this.loginform.value.password) {
  //         if (this.result.isactive) {
  //           sessionStorage.setItem('username', this.result.id);
  //           sessionStorage.setItem('role', this.result.role);
  //           this.router.navigate(['']);
  //         } else {
  //           this.toastr.error('Please contact Admin', 'InActive User');
  //         }
  //       } else {
  //         this.toastr.error('Invalid credentials');
  //       }
  //     });
  //   } else {
  //     this.toastr.warning('Please enter valid data.');
  //   }
  // }
}
