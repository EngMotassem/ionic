import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  baseUrl = 'http://localhost:54779/api/auth/';
  userToken: any;
  public decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();


  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }
  userlogin(model: any) {
    return this.http.post(this.baseUrl + 'login', model, this.requestOptions()).map((response: Response) => {
        const user = response.json();
        if (user && user.tokenString) {
            localStorage.setItem('token', user.tokenString);
            this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
            console.log(this.decodedToken);
            localStorage.setItem('userid', this.decodedToken.nameid);

            this.userToken = user.tokenString;
        }
    }
  ).catch(this.handleError);
  }

  userregister(model: any) {
    return this.http.post(this.baseUrl + 'register', model, this.requestOptions());
  }

  private requestOptions() {
    const headers = new Headers({ 'Content-type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }
loggidin() {
  return tokenNotExpired('token');
}


private handleError(error: any) {
  const applicationError = error.headers.get('Application-Error');
  if (applicationError) {
    return Observable.throw(applicationError);
  }
  const serverError = error.json();
  let modelStateErrors = '';
  if (serverError) {
    for (const key in serverError) {
      if (serverError[key]) {
        modelStateErrors += serverError[key] + '\n';
      }
    }
  }
  return Observable.throw(
    modelStateErrors || 'Server error'
  );
}

}
