import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: object;
  type: any;
  id: String;

  constructor(private http: HttpClient) {
  }

  registerUser(user: Object): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
      .map(data => data);
  }

  authenticateUser(user: Object): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
      .map(data => data);
  }

  getProfile(): Observable<any> {
    this.loadToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.get('http://localhost:3000/users/profile', { headers: headers })
      .map(res => res);
  }

  updateUser(id, user): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.id = id;
    return this.http.put('http://localhost:3000/users/update/' + this.id, user, { headers: headers })
      .map(data => data);
  }

  updateExam(id, exam): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.id = id;
    return this.http.put('http://localhost:3000/users/update/exam/' + this.id, exam, { headers: headers })
      .map(data => data);
  }

  storeUserData(token, user, type) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('type', type);
    this.authToken = token;
    this.user = user;
    this.type = type;
  }

  loadToken() {
    this.authToken = localStorage.getItem('id_token');
  }

  loadType() {
    this.type = localStorage.getItem('type');
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    this.type = null;
    localStorage.clear();
  }

  isUndergraduate() {
    this.loadType();
    if (this.type == 1) {
      return true;
    }
  }

  isPostgraduate() {
    this.loadType();
    if (this.type == 2) {
      return true;
    }
  }

  isAdmin() {
    this.loadType();
    if (this.type == 3) {
      return true;
    }
  }

}
