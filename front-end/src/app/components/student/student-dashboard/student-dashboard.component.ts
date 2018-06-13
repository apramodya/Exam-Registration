import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {CourseService} from "../../../services/course.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  user: any;
  id: string;
  name: string;
  email: string;
  type: number;
  registration_number: string;
  index_number: number;
  semester_1: any;
  semester_2: {};

  constructor(public authService: AuthService, private router: Router, private courseService: CourseService, private flashMessages: FlashMessagesService) {
  }

  ngOnInit() {
    // get user details
    this.authService.getProfile().subscribe(profile => {
        this.id = profile.user._id;
        this.user = profile.user;
        this.name = profile.user.name;
        this.email = profile.user.email;
        this.type = profile.user.type;
        this.registration_number = profile.user.registration_number;
        this.index_number = profile.user.index_number;
        this.semester_1 = profile.user.semester_1;
        this.semester_2 = profile.user.semester_2;
        console.log(this.user);

      },
      error1 => {
        console.log(error1);
        return false;
      });
  }

  onUpdate() {
    let user = {
      name: this.name,
      email: this.email
    };
    this.authService.updateUser(this.id, user).subscribe(data => {
      if (data.success) {
        this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/student/dashboard']);
      }
      else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/student/dashboard']);
      }
    });
  }


}
