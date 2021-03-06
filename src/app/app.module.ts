
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductsComponent } from './products/products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { environment } from './../environments/environment';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    HomeComponent,
    CheckOutComponent,
    ProductsComponent,
    OrderSuccessComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'register',component: RegisterComponent},
      {path:'products',component: ProductsComponent},
      {path:'shopping-cart',component: ShoppingCartComponent},
      {path:'check-out',component: CheckOutComponent},
      {path:'order-success',component: OrderSuccessComponent},
      {path:'my/orders',component: MyOrdersComponent},
      {path:'login',component: LoginComponent},
      {path:'admin/products',component: AdminProductsComponent},
      {path:'admin/orders',component: AdminOrdersComponent}      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
