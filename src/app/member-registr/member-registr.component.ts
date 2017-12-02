import { Component, OnInit } from '@angular/core';
import { SigninService } from '../All Services/signin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-registr',
  templateUrl: './member-registr.component.html',
  styleUrls: ['./member-registr.component.css']
})
export class MemberRegistrComponent implements OnInit {

  constructor(private signSer: SigninService) { }

  ngOnInit() {
  }
  memberRegistration(memRegisterForm:NgForm) {
    this.signSer.memberReg(memRegisterForm.value).subscribe(
      data => {
     console.log(data)
      });
  }
}
