import { Component, OnInit } from '@angular/core';
import { SigninService } from '../All Services/signin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
userAuth(userAuthFrm:NgForm){
  this.signSer.authUser(userAuthFrm.value).subscribe(
    data => {
   console.log(data)
    });
}
}
