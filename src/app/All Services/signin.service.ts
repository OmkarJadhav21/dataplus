import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SigninService {

  constructor(private http: Http) { }
  signInSer(signdata) {
    // let body = JSON.stringify(signdata)
    // console.log("In Ser..",signdata);
    
    return this.http.post('http://localhost:7575/user/saveUser',signdata).map(res => {
      return res;
    });
  }

}
