import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() page: EventEmitter<string> = new EventEmitter();

  changePage(page, $event?: any) {
    this.page.emit(page);
  }
}
