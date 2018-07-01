import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../../services/course.service";

@Component({
  selector: 'app-report-undergraduate',
  templateUrl: './report-undergraduate.component.html',
  styleUrls: ['./report-undergraduate.component.css']
})
export class ReportUndergraduateComponent implements OnInit {

  courses: any;

  constructor(private courseService: CourseService) {
    this.courseService.getCourses().subscribe(courses => {
        this.courses = courses;
      },
      error1 => {
        console.log(error1);
        return false;
      });
  }

  ngOnInit() {
  }

}
