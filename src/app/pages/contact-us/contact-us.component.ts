import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FoodMenu} from '../../model/foodMenu'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  router: Router;
  toast: ToastrService;
  foodItems: FoodMenu[] = [];
  totalPrize: number = 0;
  isEditable:boolean = false;
  isItemRemoved: boolean = false;
  removeTriggered: boolean;
  isOrderPlaced: boolean;
  selectedFoodItem: FoodMenu;
  updatedFoodItem: FoodMenu[] = [];

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.toast = injector.get(ToastrService);
    this.getFoodItems();
  }

  gotoPage(page) {

    if (page === 'logout') {
      localStorage.removeItem('foodOrders');
      this.router.navigateByUrl("/login");
      this.toast.success('Logged out successfully', '',{
        positionClass: 'toast-top-center'
      });
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
    this.updatedFoodItem = this.foodItems.filter((foodItem) => {
      return foodItem.id != removeItem.id;
    });
    localStorage.setItem('foodOrders', JSON.stringify(this.updatedFoodItem));
    this.removeTriggered = !this.removeTriggered;
    this.updateCart();
    this.toast.error('Removed from cart', '',{
      positionClass: 'toast-top-center'
    });
  }

  updateCart($event?: any) {
    this.getFoodItems();
    this.isEditable = false;
  }

  placeOrder($event?: any) {
    localStorage.removeItem('foodOrders');
    this.updateCart();
    this.isOrderPlaced = !this.isOrderPlaced;
    this.toast.success('Order Placed!!!', '',{
      positionClass: 'toast-top-center'
    });
  }
  
}
