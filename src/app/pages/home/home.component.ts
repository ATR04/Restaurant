import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foodDatas: any;
  router: Router;
  menuService: MenuService;
  selectedFoodItem: any;
  isSelected: boolean = false;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.menuService = injector.get(MenuService);
    this.getMenu();
  }

  gotoPage(page) {

    if (page === 'logout') {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl(`/${page}`);
    }
  }

  getMenu() {
    this.menuService.getMenu().subscribe((res) => {
      this.foodDatas = res;
    });  
  }

  gotoFoodItem(foodItem: any) {
    this.selectedFoodItem = foodItem;
    this.isSelected = true;
  }
  
}
