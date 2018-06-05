import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  user: any;
  courses: object;

  constructor(public authService: AuthService, private router: Router, private courseService: CourseService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
        //console.log(profile.user);
        this.user = profile.user;
      },
      error1 => {
        console.log(error1);
        return false;
      });
    this.courseService.getCourses().subscribe(courses => {
        this.courses = courses;
      },
      error1 => {
        console.log(error1);
        return false;
      });
  }


}
