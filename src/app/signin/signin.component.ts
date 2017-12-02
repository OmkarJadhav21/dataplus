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

  constructor(private signSer: SigninService) { }
  GoldData:any;
  ngOnInit() {
  }
  signin(signinForm: NgForm) {
    this.signSer.signInSer(signinForm.value).subscribe(
      data => {
      this.GoldData=data
    //  console.log(this.GoldData);
      });
  }
  // data=[{
  //   "userId": 1,
  //   "id": 1,
  //   "title": ["asd","asdsad","as"]
  //                 ,
  //   "completed": false
  // },
  // {
  //   "userId": 2,
  //   "id": 5,
  //   "title": "deasdaec",
  //   "completed": false
  // }
// ]
}
