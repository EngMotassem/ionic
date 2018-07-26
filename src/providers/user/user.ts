import { Http} from '@angular/http';
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
getUser(id): Observable<User> {
  return this.http
    .get<User>(this.baseUrl + 'users/' + id )
    .map(response => <User>response)
    .catch(this.handleError);
}

gettheUser(id): Observable<User> {
  return this.http
    .get(this.baseUrl + 'users/' + id )
    .map(response => <User>response)
    .catch(this.handleError);
}


updateUser(id: number, user: User) {
  return this.http.put(this.baseUrl + 'users/' + id, user).catch(this.handleError);
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
