import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRoutingModule } from './app.router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavlogoComponent } from './navlogo/navlogo.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { KycComponent } from './kyc/kyc.component';
import { MemberRegistrComponent } from './member-registr/member-registr.component';
import { MemLoanAccComponent } from './mem-loan-acc/mem-loan-acc.component';
import { MemExtrnlFundComponent } from './mem-extrnl-fund/mem-extrnl-fund.component';
import { MemDemandSheetComponent } from './mem-demand-sheet/mem-demand-sheet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninService } from './All Services/signin.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavlogoComponent,
    LoginComponent,
    SigninComponent,
    UserAuthComponent,
    KycComponent,
    MemberRegistrComponent,
    MemLoanAccComponent,
    MemExtrnlFundComponent,
    MemDemandSheetComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [SigninService],
  bootstrap: [AppComponent]
})
export class AppModule { }
