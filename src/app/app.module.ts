import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
<<<<<<< HEAD
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
=======
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { EdtProductComponent } from './edt-product/edt-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
>>>>>>> 61c188b (Implementation of Admin Login and perform CRUD operation, Implement a simple checkout process and add order summary page)

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    NavComponent,
<<<<<<< HEAD
    FooterComponent,
    CartComponent,
    ProductComponent,
    CheckoutComponent
=======
    CartComponent,
    ProductComponent,
    CheckoutComponent,
    ConfirmationComponent,
    LoginComponent,
    EdtProductComponent,
    CreateProductComponent
>>>>>>> 61c188b (Implementation of Admin Login and perform CRUD operation, Implement a simple checkout process and add order summary page)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
>>>>>>> 61c188b (Implementation of Admin Login and perform CRUD operation, Implement a simple checkout process and add order summary page)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
