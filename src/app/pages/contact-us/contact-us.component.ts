import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  router: Router;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
  }

  gotoPage(page) {

    if (page === 'logout') {
      this.router.navigateByUrl("/login");
    } else {
      this.router.navigateByUrl(`/${page}`);
    }
  }
  
}
