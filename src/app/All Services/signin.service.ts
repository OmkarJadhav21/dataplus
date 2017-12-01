import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SigninService {

  constructor(private http: Http) { }
  signInSer(signdata) {
    let body = JSON.stringify(signdata)
    return this.http.post('http://192.168.1.34/user/saveUser',signdata).subscribe(res=>{console.log(res)});
  }

}
