import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {StatusService} from "../../../services/status.service";
import {Router} from "@angular/router";
import {ModuleService} from "../../../services/module.service";

@Component({
  selector: 'app-postgraduate-repeat-exam-registration',
  templateUrl: './postgraduate-repeat-exam-registration.component.html',
  styleUrls: ['./postgraduate-repeat-exam-registration.component.css']
})
export class PostgraduateRepeatExamRegistrationComponent implements OnInit {

  year: number;
  id: number;
  user: any;
  courses: any;
  isAccepting;
  checkedCodeList = [];
  checkedNameList = [];
  c = [];

  constructor(
    private moduleService: ModuleService,
    private authService: AuthService,
    private statusService: StatusService,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) {
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
    this.moduleService.getModules().subscribe(modules => {
        this.courses = modules;
      },
      error1 => {
        console.log(error1);
        return false;
      });
  }

  ngOnInit() {
    // get status
    this.isAccepting = this.statusService.isAccepting();
    // console.log(this.isAccepting);
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
      this.c[this.c.length] = {'code': this.checkedCodeList[i], 'subject': this.checkedNameList[i]};
    }
    const exam = {
      repeat_courses: this.c,
    };
    // console.log(exam);

    this.authService.updateRepeatExam(this.id, exam).subscribe(data => {
      if (data.success) {
        console.log(data);
        this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/postgraduate/dashboard']);
      } else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/postgraduate/dashboard']);
        console.log(data);
      }
    });
  }

}
