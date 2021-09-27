import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { IProduct } from '../models/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  prodCount: number;
  showCartPane: boolean;

  constructor(private http: HttpClient, private productService: ProductService) { }

  addOrRemoveItems() {
    this.prodCount = 0;
    for (let index in this.productService.eachProdCount) {
      this.prodCount += this.productService.eachProdCount[index].qty;
    }
  }

  checkIfProdExists(product: IProduct, operation: string) {
    for (let index in this.productService.eachProdCount) {
      if (this.productService.eachProdCount[index].id == product.id) {
        if (operation === 'addItem') {
          this.productService.eachProdCount[index].qty =
            this.productService.eachProdCount[index].qty + 1;
          return;
        }
        else if (operation === 'removeItem') {
          this.productService.eachProdCount[index].qty =
            this.productService.eachProdCount[index].qty - 1;
          return;
        }
        else {
          return this.productService.eachProdCount[index].qty;
        }
      }
    }
    if (operation === 'addItem')
      return this.productService.eachProdCount.push(
        {
          id: product.id, qty: 1,
          name: product.name, price: product.price
        }
      );
    else
      return 0;
  }

}
