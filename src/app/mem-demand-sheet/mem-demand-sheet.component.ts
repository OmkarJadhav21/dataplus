import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SigninService } from '../All Services/signin.service';

@Component({
  selector: 'app-mem-demand-sheet',
  templateUrl: './mem-demand-sheet.component.html',
  styleUrls: ['./mem-demand-sheet.component.css']
})
export class MemDemandSheetComponent implements OnInit {
  msg = false;
  failmsg;
  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
  demandsheet(demandForm: NgForm) {
    this.signSer.demandSheet(demandForm.value).subscribe(
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
