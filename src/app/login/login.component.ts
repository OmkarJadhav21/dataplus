import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { SigninService } from '../All Services/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginSuccess;
  user;
  fun=false;
  funp=false;

  constructor(private lgnSer: SigninService) { }
  ngOnInit() {
    this.lgnSer.lgncllbk(dt => {
      this.user = dt.user;
      this.loginSuccess = dt.success;
    })
  }
  login(loginForm: NgForm) {
    this.lgnSer.loginSer(loginForm.value)
  }

  placeholderFun(z:string){
    if(z=="u"){
      this.fun=true
      this.funp=false;
    }else if(z=="p"){
      this.funp=true
      this.fun=false
    }
  }
  placeholderF(z:string){
    if(z=="u"){
      this.fun=true
      this.funp=false;
    }else if(z=="p"){
      this.funp=true
      this.fun=false
    }
  }
}
