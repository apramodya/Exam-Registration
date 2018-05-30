import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {tokenNotExpired} from "angular2-jwt";
import {type} from "os";

@Injectable()
export class AuthService {

  authToken: any;
  user: object;
  type: any;

  constructor(private http: HttpClient) { }

  registerUser(user: Object): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .map(data => data);
  };

  authenticateUser(user: Object): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .map(data => data);
  };

  getProfile(): Observable<any>  {
    this.loadToken();
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.authToken
    });
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .map(res => res);
  };

  storeUserData(token, user, type) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('type', type);
    this.authToken = token;
    this.user = user;
    this.type = type;
  };

  loadToken() {
    this.authToken = localStorage.getItem('id_token');
  };

  loggedIn(){
    return tokenNotExpired('id_token');
  };

  logout() {
    this.authToken = null;
    this.user = null;
    this.type = null;
    localStorage.clear();
  };

  isUndergraduate(){
    if (this.type == 1)
      return true;
  };

  isPostgraduate(){
    if (this.type == 2)
      return true;
  };

  isAdmin(){
    if (this.type == 3)
      return true;
  };

}
