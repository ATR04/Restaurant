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
  isEditable:boolean = false;
  selectedFoodItem: FoodMenu;
  updatedFoodItem: FoodMenu[] = [];

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
    this.totalPrize = 0;
    if(this.foodItems) {
      this.foodItems.forEach((foodItem) => {
        this.totalPrize += foodItem.total;
      });
    }
  }

  editFoodItem(foodItem: FoodMenu) {
    this.isEditable = true;
    this.selectedFoodItem = foodItem;
  }

  removeFoodItem(removeItem: FoodMenu) {
    localStorage.removeItem('currentGame');
    this.updatedFoodItem = this.foodItems.filter((foodItem) => {
      return foodItem.id != removeItem.id;
    });
    localStorage.setItem('foodOrders', JSON.stringify(this.updatedFoodItem));
    this.updateCart();
  }

  updateCart($event?: any) {
    this.getFoodItems();
    this.isEditable = false;
  }
  
}
