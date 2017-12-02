import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit } from '@angular/core';
import { SigninService } from '../All Services/signin.service';

@Component({
  selector: 'app-mem-extrnl-fund',
  templateUrl: './mem-extrnl-fund.component.html',
  styleUrls: ['./mem-extrnl-fund.component.css']
})
export class MemExtrnlFundComponent implements OnInit {

  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
  extFund(extFundForm: NgForm) {
    this.signSer.ExFund(extFundForm.value).subscribe(
      data => {
     console.log(data)
      });
  }
}
