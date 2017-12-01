import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KycComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  kyc(kycForm: NgForm) {
    console.log(kycForm.value);
  }
}
