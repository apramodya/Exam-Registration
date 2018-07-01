import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../../services/course.service';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {StatusService} from '../../../services/status.service';
import {ExamService} from "../../../services/exam.service";

@Component({
  selector: 'app-exam-registration',
  templateUrl: './exam-registration.component.html',
  styleUrls: ['./exam-registration.component.css']
})
export class ExamRegistrationComponent implements OnInit {

  year: number;
  id: number;
  user: any;
  courses: any;
  isAccepting;
  checkedCodeList = [];
  checkedNameList = [];
  c = [];
  d = [];

  constructor(
    private courseService: CourseService,
    private authService: AuthService,
    private statusService: StatusService,
    private examsService: ExamService,
    private router: Router,
    private flashMessages: FlashMessagesService) {

    // get user details
    this.authService.getProfile().subscribe(profile => {
        this.id = profile.user._id;
        this.user = profile.user;
        this.year = profile.user.current_level;
      },
      error1 => {
        console.log(error1);
        return false;
      });

    // get courses
    this.courseService.getCoursesBySemesterAndYear(this.year).subscribe(courses => {
        this.courses = courses;
      },
      error1 => {
        console.log(error1);
        return false;
      });
  }

  ngOnInit() {
    // get status
    this.isAccepting = this.statusService.isAccepting();
    console.log(this.isAccepting);
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
      // on submitting registered courses add to array of students documents
      this.c[this.c.length] = {'code': this.checkedCodeList[i], 'subject': this.checkedNameList[i]};
      // on submitting registered courses add to array to exams document
      this.d[this.d.length] = {
        'index_number': this.user.index_number,
        'course_code': this.checkedCodeList[i],
        'year': this.year,
        'type': this.user.type
      };
    }
    const exam = {
      courses: this.c,
    };

    for (let i = 0; i < this.d.length; i++) {
      this.examsService.addCourse(this.d[i]).subscribe(data => {
        data
      });
    }


    this.authService.updateExam(this.id, exam).subscribe(data => {
      if (data.success) {
        // console.log(data);
        this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/student/dashboard']);
      } else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/student/dashboard']);
        console.log(data);
      }
    });
  }
}
