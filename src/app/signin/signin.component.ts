import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { SigninService } from '../All Services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
  signin(signinForm: NgForm) {
    this.signSer.signInSer(signinForm.value);
  }
}
