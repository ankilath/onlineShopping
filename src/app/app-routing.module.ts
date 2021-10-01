import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { ProductsComponent } from './shopping/components/products/products.component';


const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'admin', component: AdminProductsComponent
  },
  {
    path: '', pathMatch: 'full', component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
