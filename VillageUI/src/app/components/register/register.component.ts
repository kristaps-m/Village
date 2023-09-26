import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  registerform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control(
      '',
      Validators.compose([
        Validators.required,
        // Validators.pattern(
        //   '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        // ),
      ])
    ),
    isManager: this.builder.control(false),
  });
  proceedregister() {
    console.log(this.registerform);
    console.log(this.registerform.value);
    if (this.registerform.valid) {
      console.log(this.registerform);
      this.service
        .RegisterUser(this.registerform.value)
        .subscribe((result: any) => {
          this.toastr.success('Registered successfully');
          this.router.navigate(['login']);
        });
    } else {
      this.toastr.warning('Please enter valid data.');
    }
  }
}
