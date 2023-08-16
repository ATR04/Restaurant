import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuCardComponent } from './menu-card/menu-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MenuCardComponent
  ]
})
export class ComponentsModule { }
