import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-exam-registration',
  templateUrl: './exam-registration.component.html',
  styleUrls: ['./exam-registration.component.css']
})
export class ExamRegistrationComponent implements OnInit {

  id: number;
  user: any;
  courses: any;
  checkedCodeList = [];
  checkedNameList = [];
  c = [];

  constructor(
    private courseService: CourseService,
    private authService: AuthService,
    private router: Router,
    private flashMessages: FlashMessagesService) {
  }

  ngOnInit() {
    // get courses
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    },
      error1 => {
        console.log(error1);
        return false;
      });

    // get user details
    this.authService.getProfile().subscribe(profile => {
      this.id = profile.user._id;
      this.user = profile.user;
    },
      error1 => {
        console.log(error1);
        return false;
      });
  }

  check(code, name) {
    if (this.checkedCodeList.includes(code)) {
      this.checkedCodeList = this.checkedCodeList.filter(function (el) {
        return el !== code;
      });
      this.checkedNameList = this.checkedNameList.filter(function (el) {
        return el !== name;
      });
      // console.log(this.checkedNameList);
      // console.log(this.checkedCodeList);
    } else if (!this.checkedCodeList.includes(code)) {
      this.checkedNameList.push(name);
      this.checkedCodeList.push(code);
      // console.log(this.checkedCodeList);
      // console.log(this.checkedNameList);
    }
  }

  onConfirm() {
    for (let i = 0; i < this.checkedCodeList.length; i++) {
      this.c[this.c.length] = { 'code': this.checkedCodeList[i], 'subject': this.checkedNameList[i] };
    }
    const exam = {
      semester_1: this.c,
      semester_2: this.c
    };
    // console.log(exam);

    this.authService.updateExam(this.id, exam).subscribe(data => {
      if (data.success) {
        console.log(data);
        this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        // this.router.navigate(['/student/dashboard']);
      } else {
        this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        // this.router.navigate(['/student/dashboard']);
        console.log(data);
      }
    });
  }
}
