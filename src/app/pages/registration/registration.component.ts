import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../model/userModel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  userService: UserService;
  user: UserModel;
  errors: any = {};

  constructor(private router: Router, injector: Injector) {
    this.userService = injector.get(UserService);
    this.user = new UserModel;
  }

  gotoLogin($event?: any) {
    this.router.navigateByUrl("/login");
  }

  register() {
    const isValid = this.validate();

    if (isValid) {
      this.userService.registerUser(this.user).subscribe(
        {
          next : (res) => { 
            if (res.success == true) {
              alert("Registration successful!");
              this.router.navigateByUrl('/home');
              this.user.email = '';
              this.user.name = '';
              this.user.password = '';
            } else {
              alert(res.message);
            }
          },
          error: (err) => { console.log(err); }     
        }
      );
    }
  }

  validate() {
    let isValid = true;
    this.errors = {};

    if (!this.user.name) {
      isValid = false;
      this.errors['name'] = 'Please enter your name';
    }

    if (!this.user.email) {
      isValid = false;
      this.errors['email'] = 'Please enter your email';
    }

    if (!this.user.password) {
      isValid = false;
      this.errors['password'] = 'Please enter your password';
    }
    return isValid;
  }

}
