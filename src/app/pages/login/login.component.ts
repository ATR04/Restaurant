import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../model/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user?: UserModel;
  userService: UserService;
  errors: any = {};

  constructor(private router: Router, injector: Injector) {
    this.userService = injector.get(UserService);
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
            alert('Logged in sucessfully');
            this.router.navigateByUrl('/home');
            this.user.email = '';
            this.user.password = '';
          } else {
            alert(res.message);
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
