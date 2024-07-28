import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 productsStore:any;
 cartItems:any;
 items:any = [];
  constructor(private product:ProductService,private cartService:CartService) { }


  ngOnInit(): void {
    this.product.getProducts()
    .then(products => this.productsStore = products);
  }


  addToCart(product:any){
    this.cartItems = localStorage.getItem('cartItems');
    const cart = JSON.parse(this.cartItems);
    for(let item in cart){
      if(product.productid === cart[item].productid){
        alert('Product already in cart');
        return;
      }
    }
    this.cartService.addToCart(product);
  }

}
