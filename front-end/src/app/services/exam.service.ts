import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ExamService {

  constructor(private http: HttpClient) {
  }

  addCourse(course): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('http://localhost:3000/exams/add', course, {headers: headers})
      .map(data => data);
  }

  getCoursesByCourseCode(code): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get('http://localhost:3000/exams/getRegisteredExamsByCourseCode_undergraduate/' + code, {headers: headers})
      .map(data => data);
  }

  getCoursesByYear(year): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get('http://localhost:3000/exams//getRegisteredExamsByYear_undergraduate/' + year, {headers: headers})
      .map(data => data);
  }

}
