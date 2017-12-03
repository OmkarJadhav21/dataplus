import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { SigninService } from '../All Services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  dropdt = [];
  dropdt1 = [];
  dropdt2 = [];
  msg = false;
  failmsg;
  constructor(private signSer: SigninService) { }
  GoldData: any;
  ngOnInit() {
    this.signSer.drop().subscribe(data => {
      this.dropdt = data.json();
      // console.log("myasdsdasd",this.dropdt);
    });
  }

  onChange(abc) {
    console.log(abc);
  }

  signin(signinForm: NgForm) {
    // console.log(signinForm);

    this.signSer.signInSer(signinForm.value).subscribe(
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
      }
    );
  }

  countryFind(cid) {
    // console.log(cid);
    this.signSer.drop1(cid.id).subscribe(data => {
      this.dropdt1 = data.json();
    })
  }
  cityFind(stateId) {
    this.signSer.drop2(stateId).subscribe(data => {
      this.dropdt2 = data.json();
    })
  }
  myfun(frm: any, name: any) {
    console.log(frm.value);

    console.log(name);
  }
}
