import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CourseService {

  year : Number;

  constructor(private http: HttpClient) {
    this.year = 1;
  }

  addCourse(course): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('http://localhost:3000/courses/add', course, {headers: headers})
      .map(data => data);
  }

  getCourses(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get('http://localhost:3000/courses/getCoursesByYear/'+this.year, {headers: headers})
      .map(data => data);
  }
}
