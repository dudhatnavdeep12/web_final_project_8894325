import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   items:any = [];
  constructor() { }

  addToCart(product: any) {
    this.items.push(product);
    localStorage.setItem('cartItems', JSON.stringify(this.items));
    alert('Your product has been added to the cart!');
  }
}
