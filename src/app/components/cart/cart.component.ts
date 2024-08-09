import { Component, OnInit } from '@angular/core';
import { get } from 'http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  total = 0;
  cartitems:any;
  ngOnInit(): void {
    this.getAllCartItems();
    this.getTotal();    
  }


  getAllCartItems() {
    const cartItemsString = localStorage.getItem('cartItems');
    this.cartitems = cartItemsString ? JSON.parse(cartItemsString) : null;
    console.log(this.cartitems);
  }

  getTotal(){
    if (this.cartitems) {
      this.cartitems.forEach((item:any) => {
        this.total += item.price;
      });
    }
  }

  removeItem(id:any){
    this.cartitems = this.cartitems.filter((item:any) => item.productid !== id);
    localStorage.setItem('cartItems', JSON.stringify(this.cartitems));
    this.total = 0;
    this.getAllCartItems();
    this.getTotal();
  }
}
