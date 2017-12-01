import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mem-loan-acc',
  templateUrl: './mem-loan-acc.component.html',
  styleUrls: ['./mem-loan-acc.component.css']
})
export class MemLoanAccComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loanAccount(loanForm: NgForm) {
    console.log(loanForm.value);
  }
}
