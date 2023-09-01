import { Component, EventEmitter, Injector, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() page: EventEmitter<string> = new EventEmitter();
  @Input('removeTriggered') removeTriggered: boolean;
  @Input('isOrderPlaced') isOrderPlaced: boolean;
  @Input('addedToCart') addedToCart: boolean;
  cartQuantity: number;

  constructor() {
  }

  ngOnInit() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('fixed-top');
      } else {
        $('.navbar').removeClass('fixed-top');
      }
    });
    this.updateCartQuantity();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateCartQuantity();
  }

  updateCartQuantity() {
    const cartItems = JSON.parse(localStorage.getItem('foodOrders'));
    if(cartItems) {
      this.cartQuantity = cartItems.length;
    }

    if(cartItems == null) {
      this.cartQuantity = 0
    }
  }

  changePage(page, $event?: any) {
    this.page.emit(page);
  }
}
