import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SigninService } from '../All Services/signin.service';

@Component({
  selector: 'app-mem-demand-sheet',
  templateUrl: './mem-demand-sheet.component.html',
  styleUrls: ['./mem-demand-sheet.component.css']
})
export class MemDemandSheetComponent implements OnInit {

  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
  demandsheet(demandForm: NgForm) {
    this.signSer.demandSheet(demandForm.value).subscribe(
      data => {
     console.log(data)
      });
  }
}
