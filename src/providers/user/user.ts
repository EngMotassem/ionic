import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { User } from '../../app/_model/user';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  baseUrl = 'http://localhost:54779/api/';


  constructor(private http: HttpClient) {
    console.log('Hello UserProvider Provider');


  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users')
    .map(response => <User[]>response);

    
}
getAllUsers() {
  return this.http.get(this.baseUrl + 'users')
  .map(response => response);

  
}


}
