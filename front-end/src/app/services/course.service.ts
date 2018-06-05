import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {StatusService} from "./status.service";

@Injectable()
export class CourseService {

  semester: Number = 1;

  constructor(private http: HttpClient, private statusService: StatusService) {}

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
    this.statusService.getStatus().subscribe(data => {
      this.semester = data.status.semester;
    });
    return this.http.get('http://localhost:3000/courses/getCoursesBySemester/' + this.semester, {headers: headers})
      .map(data => data);
  }
}
