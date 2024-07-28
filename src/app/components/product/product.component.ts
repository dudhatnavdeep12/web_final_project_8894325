import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  product:any;
  imgSrc = "";
  constructor(private activatedRout:ActivatedRoute,private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
       let prId = this.activatedRout.snapshot.params['id'];

        this.productService.getProduct(prId).subscribe((response: any) => {
          this.product = response;
          console.log(this.product);
        });
  }

  addToCart(product:any){
    let cartItems = localStorage.getItem('cartItems');
    let cart = JSON.parse(cartItems as string);
    for(let item in cart){
      if(product.productid === cart[item].productid){
        alert('Product already in cart');
        return;
      }
    }
    
    this.cartService.addToCart(product);
  }

}
