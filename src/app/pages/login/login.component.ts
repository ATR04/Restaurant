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
    this.userService.getUser(this.user).subscribe(
      {
        next: (res) => { 
          if (res.success == true) {
            alert("Logged in sucessfully");
            this.router.navigateByUrl('/home');
            this.user.email = '';
            this.user.password = '';  
          } else {
            alert(res.message);
          }
        },
        error: (err) => { console.log(err); }
      }
    )
  }
}
