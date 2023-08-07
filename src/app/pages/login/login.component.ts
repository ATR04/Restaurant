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

  user: UserModel
  userService: UserService;

  constructor(private router: Router, injector: Injector) {
    this.userService = injector.get(UserService);
    this.user = new UserModel;
  }

  gotoRegistration($event?: any) {
    this.router.navigateByUrl('/register');
  }

  login() {
    console.log(this.user);
    this.userService.getUser(this.user).subscribe((res) => {

    });
  }
}
