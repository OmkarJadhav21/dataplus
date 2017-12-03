import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit } from '@angular/core';
import { SigninService } from '../All Services/signin.service';

@Component({
  selector: 'app-mem-loan-acc',
  templateUrl: './mem-loan-acc.component.html',
  styleUrls: ['./mem-loan-acc.component.css']
})
export class MemLoanAccComponent implements OnInit {
  msg = false;
  failmsg;
  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
  loanAccount(loanForm: NgForm) {
    this.signSer.memberLoan(loanForm.value).subscribe(
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
