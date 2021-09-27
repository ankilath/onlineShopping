import { Component } from '@angular/core';
import { IProductQty } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  products$: IProductQty[] = [];
  totalPrice: number = 0;
  constructor(private productService: ProductService) {

    this.products$ = this.productService.eachProdCount;
  }

  totalAmount() {
    this.totalPrice = 0;
    this.products$.forEach((ele) => {
      this.totalPrice += ele.price * ele.qty
    })
    return this.totalPrice;
  }

}
