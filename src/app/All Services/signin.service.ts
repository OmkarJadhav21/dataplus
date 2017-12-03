import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operator/map';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SigninService {
  private em: EventEmitter<any>
  linkhit = "http://123.252.131.54";
  constructor(private router: Router,
    private http: Http,

  ) { this.em = new EventEmitter<any>() }


  signInSer(signdata): Observable<Response> {
    // let body = JSON.stringify(signdata)
    // console.log("In Ser..",signdata);
    return this.http.post(this.linkhit + '/user/saveUser', signdata).map(res => {
      return res;
    });
  }
  loginSer(loginData) {
    // return this.http.get('http://localhost:7575/user/loginUser',loginData).map(res => {
    //   return res;});

    if (loginData.EmployeeCode == "admin" && loginData.Password == "admin") {
      this.em.emit({
        user: "admin",
        success: null
      })
      this.router.navigate(['/userAuth'])
    }
    else {
      this.em.emit({
        success: "Employee Code Or Password is Incorrect"
      })
    }
  }

  authUser(Authdata) {
    return this.http.post(this.linkhit + '/saveUserAuthentication', Authdata).map(res => {
      return res;
    });
  }
  kyc(kycdata) {
    return this.http.post(this.linkhit + '/saveCustomer', kycdata).map(res => {
      return res;
    });
  }
  demandSheet(demandData) {
    return this.http.post(this.linkhit + '/saveDemandSheet', demandData).map(res => {
      return res;
    });
  }
  ExFund(exData) {
    return this.http.post(this.linkhit + '/saveExternalFund', exData).map(res => {
      return res;
    });
  }
  memberReg(mregData) {
    return this.http.post(this.linkhit + '/saveMember', mregData).map(res => {
      return res;
    });
  }

  memberLoan(mlData) {
    return this.http.post(this.linkhit + '/saveMemberLoan', mlData).map(res => {
      return res;
    });
  }


  lgncllbk(callback: any) {
    this.em.subscribe(data => {
      callback(data)
    }
    )
  }

  drop() {
    return this.http.get(this.linkhit + '/getAllCountries').map(res => { return res })
  }
  drop1(countryId: any) {
    return this.http.get(this.linkhit + `/getAllStates/${countryId}`).map(res => { return res })
  }
  drop2(statId: any) {
    return this.http.get(this.linkhit + `/getAllCities/${statId}`).map(res => { return res })
  }
  extractData(res: Response) {
    let body = res.json();
    return body || [];
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
