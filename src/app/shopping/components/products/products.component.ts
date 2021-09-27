
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { IProduct } from '../../../shared/models/product';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products$: IProduct[] = [];
  productSub: Subscription;
  message: string = '';

  constructor(private productService: ProductService, private cartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.displayProducts();
    this.productService.queryProd.subscribe(value => {
      this.message = '?q=' + value;
      this.displayProducts();
    })
  }

  displayProducts() {
    this.productSub = this.productService.getProducts(this.message)
      .subscribe(data => this.products$ = data);
  }

  addToCart(product: IProduct) {
    this.cartService.checkIfProdExists(product, 'addItem');
    this.cartService.addOrRemoveItems();
  }

  removeFromCart(product: IProduct) {
    this.cartService.checkIfProdExists(product, 'removeItem');
    this.cartService.addOrRemoveItems();
  }

  getQuantity(product: IProduct) {
    if (!this.cartService.checkIfProdExists(product, 'findItem')) return 0;
    return this.cartService.checkIfProdExists(product, 'findItem');
  }

  getShowCartPane() { return this.cartService.showCartPane; }

  ngOnDestroy() {
    this.productSub.unsubscribe();
  }

}

