import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StatusService } from './status.service';
import { AuthService } from './auth.service';

@Injectable()
export class CourseService {

  semester: number;

  constructor(private http: HttpClient, private statusService: StatusService, private authService: AuthService) {
    this.statusService.getStatus().subscribe(data => {
      this.semester = data.status.u_semester;
    });
  }

  addCourse(course): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('http://localhost:3000/courses/add', course, { headers: headers })
      .map(data => data);
  }

  getCourses(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get('http://localhost:3000/courses/getCourses', { headers: headers })
      .map(data => data);
  }

  getCoursesBySemesterAndYear(year= 1): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get('http://localhost:3000/courses/getCoursesBySemesterAndYear/' + this.semester + '/' + year,
      { headers: headers })
      .map(data => data);
  }
}
