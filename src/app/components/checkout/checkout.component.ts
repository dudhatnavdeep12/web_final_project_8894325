<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
>>>>>>> 61c188b (Implementation of Admin Login and perform CRUD operation, Implement a simple checkout process and add order summary page)

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
=======
  constructor(private formBuilder: FormBuilder,private router:Router) { }
  
  addressForm!: FormGroup;
  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      fname: ['',Validators.required],
      lname:  ['',Validators.required],
      email:  ['',Validators.required],
      address:  ['',Validators.required],
      city:  ['',Validators.required],
      state:  ['',Validators.required]
    });



  }

  ConfirmOrder(){ 
    localStorage.setItem('userDetails', JSON.stringify(this.addressForm.value));
    this.router.navigate(['/confirmation']);
>>>>>>> 61c188b (Implementation of Admin Login and perform CRUD operation, Implement a simple checkout process and add order summary page)
  }

}
