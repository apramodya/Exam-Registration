import {Injectable} from '@angular/core';
import {StatusService} from "./status.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ModuleService {

  semester: number = 1;

  constructor(private http: HttpClient, private statusService: StatusService) {
    this.statusService.getStatus().subscribe(data => {
      this.semester = data.status.p_semester;
    });
  }

  addModule(module): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post('http://localhost:3000/modules/add', module, {headers: headers})
      .map(data => data);
  }

  getModules(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get('http://localhost:3000/modules/getModules', {headers: headers})
      .map(data => data);
  }

  getModulesBySemesterAndYear(year = 1): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get('http://localhost:3000/modules/getModulesBySemesterAndYear/' + this.semester + '/' + year,
      {headers: headers})
      .map(data => data);
  }

}
