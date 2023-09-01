import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../model/userModel';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user?: UserModel;
  userService: UserService;
  errors: any = {};
  toast: ToastrService;

  constructor(private router: Router, injector: Injector) {
    this.userService = injector.get(UserService);
    this.toast = injector.get(ToastrService);
    this.user = new UserModel();
  }

  gotoRegistration($event?: any) {
    this.router.navigateByUrl('/register');
  }

  login() {
    const isValid = this.validate();

    if (isValid) {
      this.userService.getUser(this.user).subscribe({
        next: (res) => {
          if (res.success == true) {
            this.toast.success('Logged in sucessfully', '',{
              positionClass: 'toast-top-center'
            });
            this.router.navigateByUrl('/home');
            this.user.email = '';
            this.user.password = '';
          } else {
            this.toast.error(res.message, '',{
              positionClass: 'toast-top-center'
            });
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  validate() {
    let isValid = true;
    this.errors = {};

    if (!this.user.email) {
      isValid = false;
      this.errors['email'] = 'Please enter the email';
    }

    if (!this.user.password) {
      isValid = false;
      this.errors['password'] = 'Please enter the password';
    }
    return isValid;
  }
}
