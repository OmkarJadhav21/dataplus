import { SigninService } from './../All Services/signin.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KycComponent implements OnInit {

  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
  kyc(kycForm: NgForm) {
    this.signSer.kyc(kycForm.value).subscribe(
      data => {
     console.log(data)
      });
  }
}
