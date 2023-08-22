import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {

  @Input('foodDatas') foodDatas: any;

  @Output('foodItem') foodItem: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  order(item: any) {
    this.foodItem.emit(item);
  }

}
