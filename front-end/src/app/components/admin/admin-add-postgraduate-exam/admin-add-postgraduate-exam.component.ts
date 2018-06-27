import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {ValidateService} from "../../../services/validate.service";
import {ModuleService} from "../../../services/module.service";

@Component({
  selector: 'app-admin-add-postgraduate-exam',
  templateUrl: './admin-add-postgraduate-exam.component.html',
  styleUrls: ['./admin-add-postgraduate-exam.component.css']
})
export class AdminAddPostgraduateExamComponent implements OnInit {

  courses: any;
  course_name: String;
  course_code: String;
  year: Number;
  semester: Number;

  constructor(
    private moduleService: ModuleService,
    private router: Router,
    private flashMessages: FlashMessagesService,
    private validateService: ValidateService
  ) {
    this.moduleService.getModules().subscribe(modules => {
        this.courses = modules;
      },
      error1 => {
        console.log(error1);
        return false;
      });
  }

  ngOnInit() {
  }

  onSubmit() {
    const module = {
      course_name: this.course_name,
      course_code: this.course_code,
      year: this.year,
      semester: this.semester
    };

    if (!this.validateService.validateCourse(module)) {
      this.flashMessages.show('Fill missing fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    // add module
    this.moduleService.addModule(module).subscribe(data => {
      if (data.success == true) {
        this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/admin/add-postgraduate-exam']);
      } else {
        this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/admin/add-postgraduate-exam']);
      }
    });
  }

}
