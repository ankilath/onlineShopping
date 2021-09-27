import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './core/bs-navbar/bs-navbar.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { ProductService } from './shared/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShoppingCartService } from './shared/services/shopping-cart.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ProductsComponent,
    HomeComponent,
    ShoppingCartComponent,
    AdminProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
