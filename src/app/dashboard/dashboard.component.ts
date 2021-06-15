import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service'; 
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
 
   loginForm: FormGroup;
   loginsubmitted = false;
  constructor(private formBuilder:FormBuilder,private apiService:LoginService) { }
  ngOnInit(){
    //Login form validations
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
  
    //Register form validations
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    firstname: ['', [Validators.required]],
    mobile: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]]
    });
  }

//Register form actions
get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log(this.registerForm);
    //True if all the fields are filled
    if(this.submitted)
    {
      $("#registermodal").modal("hide");
    }
   
}

// Login form actions
get ff() { return this.loginForm.controls; }
onLoginSubmit() {
    this.loginsubmitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.loginsubmitted)
    {
      $("#loginmodal").modal("hide");
    }
  }

  
  
    
  

}
