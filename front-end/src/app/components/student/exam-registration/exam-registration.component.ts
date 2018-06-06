import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-exam-registration',
  templateUrl: './exam-registration.component.html',
  styleUrls: ['./exam-registration.component.css']
})
export class ExamRegistrationComponent implements OnInit {

  courses: object;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => {
        this.courses = courses;
      },
      error1 => {
        console.log(error1);
        return false;
      });
  }
}
