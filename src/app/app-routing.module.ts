import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
<<<<<<< HEAD
=======
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { EdtProductComponent } from './edt-product/edt-product.component';
import { create } from 'domain';
import { CreateProductComponent } from './create-product/create-product.component';
>>>>>>> 61c188b (Implementation of Admin Login and perform CRUD operation, Implement a simple checkout process and add order summary page)

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product/:id',component:ProductComponent},
<<<<<<< HEAD
  {path:'cart',component:CartComponent}
=======
  {path:'cart',component:CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'edit/:id',component:EdtProductComponent},
  {path:'create',component:CreateProductComponent}
>>>>>>> 61c188b (Implementation of Admin Login and perform CRUD operation, Implement a simple checkout process and add order summary page)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
