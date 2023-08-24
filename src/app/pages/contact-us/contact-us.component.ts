import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { FoodMenu} from '../../model/foodMenu'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  router: Router;
  foodItems: FoodMenu[] = [];
  totalPrize: number = 0;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.getFoodItems();
  }

  gotoPage(page) {

    if (page === 'logout') {
      this.router.navigateByUrl("/login");
    } else {
      this.router.navigateByUrl(`/${page}`);
    }
  }

  getFoodItems() {
    this.foodItems = JSON.parse(localStorage.getItem('foodOrders'));

    if(this.foodItems) {
      this.foodItems.forEach((foodItem) => {
        this.totalPrize += foodItem.total;
      });
    }
  }
  
}
