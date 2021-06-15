import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
  import { Router } from '@angular/router';
  // import { CommonResponse } from "../common-response";
  import { LoginService } from 'src/app/service/login.service'; 
@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  
  public loginError:String;
  constructor(private apiService:LoginService,private router: Router) { }

  ngOnInit() {}

  onSubmit(){  
    if(this.loginForm.valid){
      this.apiService.login(this.loginForm.value)
      .subscribe((data:any) => {
      console.log(data);
        if(data.status === 200 && !data.body.ErrorCode){
          this.router.navigate(['/dashboard']);
        }else{
          this.loginError = data.body.message;
        }        
      },
      error => this.loginError = error
      )
    }    
  }
}

 
