import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodMenu } from '../../model/foodMenu';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit{

  @Input('selectedFoodItem') foodItem: any;
  @Output('addtoCart') addtoCart: EventEmitter<any> = new EventEmitter();

  foodMenu: FoodMenu;

  constructor() {
    this.foodMenu = new FoodMenu();
    this.foodMenu.quantity = 1;
  }
  ngOnInit(): void {
    this.updatePrize();
    this.foodMenu.id = this.foodItem.id;
    this.foodMenu.name = this.foodItem.name;
    this.foodMenu.img = this.foodItem.img;
    this.foodMenu.prize = this.foodItem.prize;
    if(this.foodItem.total) {
      this.foodMenu.total = this.foodItem.total;
    }
    if(this.foodItem.quantity) {
      this.foodMenu.quantity = this.foodItem.quantity;
    }
  }

  decrease($event) {
    if(this.foodMenu.quantity > 0) {
      this.foodMenu.quantity = (this.foodMenu.quantity) - 1;
      this.updatePrize();
    }
  }

  increase($event) {
    this.foodMenu.quantity = (this.foodMenu.quantity) + 1;
    this.updatePrize();
  }

  updatePrize() {
    this.foodMenu.total = (this.foodMenu.quantity) * (this.foodItem.prize);
  }

  addToCart($event) {
    let foodMenus = [];
    let cartItems = JSON.parse(localStorage.getItem('foodOrders')); 

    if(cartItems) {
      let index  = cartItems.findIndex((cartItem) => {
        return cartItem.id == this.foodMenu.id;
      });

      if (index == -1) {
        cartItems.push(this.foodMenu);
        localStorage.setItem('foodOrders', JSON.stringify(cartItems));
      } else {
        cartItems[index] = this.foodMenu;
        localStorage.setItem('foodOrders', JSON.stringify(cartItems));
      }
     
    } else {
      foodMenus.push(this.foodMenu);
      localStorage.setItem('foodOrders', JSON.stringify(foodMenus));
    }
  
    this.addtoCart.emit();
  }
}
