import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRoutingModule } from './app.router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavlogoComponent } from './navlogo/navlogo.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavlogoComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
