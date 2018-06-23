import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../services/validate.service';

@Component({
  selector: 'app-admin-add-exam',
  templateUrl: './admin-add-exam.component.html',
  styleUrls: ['./admin-add-exam.component.css']
})
export class AdminAddExamComponent implements OnInit {

  courses: any;
  course_name: String;
  course_code: String;
  year: Number;
  semester: Number;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private flashMessages: FlashMessagesService,
    private validateService: ValidateService) { }


  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    },
      error1 => {
        console.log(error1);
        return false;
      });
  }

  onSubmit() {
    const course = {
      course_name: this.course_name,
      course_code: this.course_code,
      year: this.year,
      semester: this.semester
    };

    if (!this.validateService.validateCourse(course)) {
      this.flashMessages.show('Fill missing fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    // add course
    this.courseService.addCourse(course).subscribe(data => {
      if (data.success == true) {
        this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/admin/add-exam']);
      } else {
        this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/admin/add-exam']);
      }
    });
  }
}
