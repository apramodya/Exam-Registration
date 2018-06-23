import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StatusService {

  constructor(private http: HttpClient) {
  }

  addStatus(status): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('http://localhost:3000/status/add', status, {headers: headers})
      .map(data => data);
  }

  updateStatus(id, status): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put('http://localhost:3000/status/update/' + id, status, {headers: headers})
      .map(data => data);
  }

  getStatus(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get('http://localhost:3000/status/get', {headers: headers})
      .map(data => data);
  }

  isAccepting() {
    this.getStatus().subscribe(data => {
      return data.status.u_allow;
    });
  }
}
