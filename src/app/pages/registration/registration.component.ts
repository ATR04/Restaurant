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

  constructor(private router: Router, injector: Injector) {
    this.userService = injector.get(UserService);
    this.user = new UserModel;
  }

  gotoLogin($event?: any) {
    this.router.navigateByUrl("/login");
  }

  register() {
    this.userService.registerUser(this.user).subscribe(
      {
        next : (res) => { 
          if (res.success == true) {
            alert("Registration successful!");
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
