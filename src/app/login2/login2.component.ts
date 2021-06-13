import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login2Service } from 'src/app/service/login2.service';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

 submitted = false;
  loginForm: FormGroup;
  authError = false;
  authErrorMsg?: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: Login2Service
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.loginForm.invalid) {
      
      return;
      
    }
    console.log(this.loginForm.value)
    // const userloginBody = {
    //   username: data.username,
    //   password: data.password
    // };
    // // Pending API call and logic handling
    // this.loginService.login(userloginBody)
    //   .then(() => {
    //     // Successfully login
    //     this.router.navigateByUrl('/home');
    //   })
    //   .catch((reason) => {
    //     // Failed login
    //     this.authError = true;
    //     this.authErrorMsg = reason;
    //   });
  }
}
