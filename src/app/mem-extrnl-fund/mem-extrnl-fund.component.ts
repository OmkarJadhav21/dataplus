import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit } from '@angular/core';
import { SigninService } from '../All Services/signin.service';

@Component({
  selector: 'app-mem-extrnl-fund',
  templateUrl: './mem-extrnl-fund.component.html',
  styleUrls: ['./mem-extrnl-fund.component.css']
})
export class MemExtrnlFundComponent implements OnInit {
  msg = false;
  failmsg;
  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
  extFund(extFundForm: NgForm) {
    this.signSer.ExFund(extFundForm.value).subscribe(
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
