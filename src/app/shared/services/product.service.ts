import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IProduct, IProductQty } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  filterQuery: string;
  queryProd: Subject<string> = new Subject<string>();
  eachProdCount: IProductQty[] = [];

  constructor(private http: HttpClient) { }

  getProducts(query: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.server.url + '/products' + query);
  }

  get productQuery(): string {
    return this.filterQuery;
  }

  queryKeyword() {
    this.queryProd.next(this.productQuery);
  }

}
