import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router) { }

  data: any = {
    productid: '',
    name: '',
    price: '',
    category: '',
    description: '',
    image: '',
    sellername: '',
    stock: ''
  }

  ngOnInit(): void {
  }

  createProduct() { 
    this.productService.createProduct(this.data).subscribe(data => {
      console.log(data);
      this.router.navigate(['/admin']);
    }
    );
  }
}
