import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mem-extrnl-fund',
  templateUrl: './mem-extrnl-fund.component.html',
  styleUrls: ['./mem-extrnl-fund.component.css']
})
export class MemExtrnlFundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  extFund(extFundForm: NgForm) {
    console.log(extFundForm.value);
  }
}
