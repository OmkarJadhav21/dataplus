import { Component, OnInit } from '@angular/core';
import { SigninService } from '../All Services/signin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  msg = false;
  failmsg;
  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
userAuth(userAuthFrm:NgForm){
  this.signSer.authUser(userAuthFrm.value).subscribe(
    res => {
      if (res['ok'] === true) {
       this.msg=true
       this.failmsg="Data Saved Successfully !!!" 
       //  console.log(this.msg)
      }
    },
    err=>{          
      this.msg=true
      this.failmsg="Something went wrong" 
    });
}
}
