import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
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
  }

}
