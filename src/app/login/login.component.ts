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
}
