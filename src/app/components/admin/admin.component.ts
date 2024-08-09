import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
>>>>>>> 61c188b (Implementation of Admin Login and perform CRUD operation, Implement a simple checkout process and add order summary page)

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

=======
  constructor(private product:ProductService,private router:Router) { }
  products:any;
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.product.getProducts()
    .then(products => this.products = products);
  }
  deleteProducts(id:any){
    this.product.deleteProduct(id).subscribe(data => {
      console.log(data);
    });
    this.getProduct();
    console.log(id);
  }


>>>>>>> 61c188b (Implementation of Admin Login and perform CRUD operation, Implement a simple checkout process and add order summary page)
}
