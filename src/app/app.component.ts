import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant';

  public doUnload(): void {
    this.doBeforeUnload();
  }

  public doBeforeUnload(): void {
    localStorage.removeItem('foodOrders');
  }
}
