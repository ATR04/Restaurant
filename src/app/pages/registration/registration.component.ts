import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../model/userModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  userService: UserService;
  user: UserModel;
  errors: any = {};
  toast: ToastrService;


  constructor(private router: Router, injector: Injector) {
    this.userService = injector.get(UserService);
    this.toast = injector.get(ToastrService);
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
              this.toast.success("Registration successful!", '',{
                positionClass: 'toast-top-center'
              });
              this.router.navigateByUrl('/home');
              this.user.email = '';
              this.user.name = '';
              this.user.password = '';
            } else {
              this.toast.error(res.message, '',{
                positionClass: 'toast-top-center'
              });
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
