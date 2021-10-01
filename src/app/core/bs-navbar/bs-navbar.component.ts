import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  searchText: string;

  constructor(private productService: ProductService,
    private cartService: ShoppingCartService) { }

  /*
    This searches the keyword
    @params : string
  */
  assignSearchValue($event) {
    this.searchText = $event;
  }

  filterProducts() {
    this.productService.filterQuery = this.searchText;
    this.productService.queryKeyword();
  }

  getQuantity() {
    if (!this.cartService.prodCount) return 0;
    return this.cartService.prodCount;
  }

  showCartPane() {
    if (this.cartService.showCartPane)
      this.cartService.showCartPane = false;
    else
      this.cartService.showCartPane = true;
  }

}
