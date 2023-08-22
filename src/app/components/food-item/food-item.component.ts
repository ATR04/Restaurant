import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit{
  @Input('selectedFoodItem') foodItem: any;

  constructor() {
    
  }
  ngOnInit(): void {
    console.log(this.foodItem);
  }
}
