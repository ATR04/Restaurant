import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { FoodItemComponent } from './food-item/food-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuCardComponent,
    FoodItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MenuCardComponent,
    FoodItemComponent
  ]
})
export class ComponentsModule { }
