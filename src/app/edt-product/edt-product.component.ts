import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edt-product',
  templateUrl: './edt-product.component.html',
  styleUrls: ['./edt-product.component.css']
})
export class EdtProductComponent implements OnInit {
  product:any;
  productDetails:any;


  constructor(private route:ActivatedRoute,private productService:ProductService,private router:Router) { }
  productId:any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });



 this.productService.getProduct(this.productId).subscribe(data => {
  this.productDetails = data;
  console.log(this.productDetails);
});




  }

  updateProduct(id:any){

    var product = {
      name: this.productDetails[0].name,
      price: this.productDetails[0].price,
      description: this.productDetails[0].description,
      sellername: this.productDetails[0].sellername,
      stock: this.productDetails[0].stock
    };
    this.productService.updateProduct(id,product).subscribe(data => {
    });
    this.router.navigate(['/admin']);

  }

}
