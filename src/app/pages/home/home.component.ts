import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  foodDatas: any;
  router: Router;
  menuService: MenuService;
  toast: ToastrService;
  selectedFoodItem: any;
  isSelected: boolean = false;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.menuService = injector.get(MenuService);
    this.toast = injector.get(ToastrService);
    this.getMenu();
  }

  gotoPage(page) {

    if (page === 'logout') {
      localStorage.removeItem('foodOrders');
      this.toast.success('Logged out successfully', '',{
        positionClass: 'toast-top-center'
      });
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

  addtoCart($event) {
    this.isSelected = false;
  }
  
}
