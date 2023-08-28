import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() page: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('fixed-top');
      } else {
        $('.navbar').removeClass('fixed-top');
      }
    });
  }

  changePage(page, $event?: any) {
    this.page.emit(page);
  }
}
