import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router) { }
  login!:FormGroup;
  public isLoggedIn = false;
  ngOnInit(): void {
    this.login = this.formBuilder.group({
      uname: ['',Validators.required],
      ps:  ['',Validators.required],
    });

  }


  loginAdmin(){

    if(this.login.value.uname == 'admin' && this.login.value.ps == 'admin'){
      alert('Login Successful');
      this.isLoggedIn = true;
      this.router.navigate(['/admin']);
    }else{
      alert('Login Failed');
    }
  }
}
