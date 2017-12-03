import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { KycComponent } from './kyc/kyc.component';
import { MemDemandSheetComponent } from './mem-demand-sheet/mem-demand-sheet.component';
import { MemExtrnlFundComponent } from './mem-extrnl-fund/mem-extrnl-fund.component';
import { MemLoanAccComponent } from './mem-loan-acc/mem-loan-acc.component';
import { MemberRegistrComponent } from './member-registr/member-registr.component';
import { SigninComponent } from './signin/signin.component';
import { UserAuthComponent } from './user-auth/user-auth.component';


const routes:Routes=[
    { path:'',component:LoginComponent},    
    { path:'login',component:LoginComponent},
    { path:'kyc',component:KycComponent},
    { path:'demandSheet',component:MemDemandSheetComponent},
    { path:'externalFund',component:MemExtrnlFundComponent},
    { path:'loanAccount',component:MemLoanAccComponent},
    { path:'memberRegister',component:MemberRegistrComponent},
    { path:'signin',component:SigninComponent},
    { path:'userAuth',component:UserAuthComponent},
    

   
];

export const MyRoutingModule = RouterModule.forRoot(routes);