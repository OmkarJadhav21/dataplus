import { SigninService } from './../All Services/signin.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KycComponent implements OnInit {
  msg = false;
  failmsg;
  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
  kyc(kycForm: NgForm) {
    this.signSer.kyc(kycForm.value).subscribe(
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
