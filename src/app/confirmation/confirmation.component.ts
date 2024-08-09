import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  cartitems:any;
  subtotal = 0;
  tax = 0;
  total=0;
  constructor() { }
  userDetails:any;
  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    console.log(this.userDetails);


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
        this.subtotal += item.price;
      });
    }

    this.tax = Math.ceil(this.subtotal * 0.13);
    this.total = this.subtotal + this.tax;
  }


  goToHome(){
    localStorage.removeItem('cartItems');
    localStorage.removeItem('userDetails');
    window.location.href = '/';
  }
}
