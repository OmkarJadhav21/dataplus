import { Component, OnInit } from '@angular/core';
import { SigninService } from '../All Services/signin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-registr',
  templateUrl: './member-registr.component.html',
  styleUrls: ['./member-registr.component.css']
})
export class MemberRegistrComponent implements OnInit {
  msg = false;
  failmsg;
  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
  memberRegistration(memRegisterForm:NgForm) {
    this.signSer.memberReg(memRegisterForm.value).subscribe(
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
