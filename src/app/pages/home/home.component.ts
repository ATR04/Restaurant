import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  router: Router;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
  }

  gotoPage(page) {

    if (page === 'logout') {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl(`/${page}`);
    }
  }
  
}
