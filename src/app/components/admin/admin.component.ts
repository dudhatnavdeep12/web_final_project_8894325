import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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


}
