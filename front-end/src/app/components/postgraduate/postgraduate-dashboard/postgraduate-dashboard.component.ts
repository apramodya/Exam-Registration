import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {CourseService} from "../../../services/course.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-postgraduate-dashboard',
  templateUrl: './postgraduate-dashboard.component.html',
  styleUrls: ['./postgraduate-dashboard.component.css']
})
export class PostgraduateDashboardComponent implements OnInit {

  user: any;
  id: string;
  name: string;
  email: string;
  type: number;
  registration_number: string;
  index_number: number;
  courses: any;
  repeat_courses: any;

  constructor(public authService: AuthService,
              private router: Router,
              private courseService: CourseService,
              private flashMessages: FlashMessagesService) {
    // get user details
    this.authService.getProfile().subscribe(profile => {
        this.id = profile.user._id;
        this.user = profile.user;
        this.name = profile.user.name;
        this.email = profile.user.email;
        this.type = profile.user.type;
        this.registration_number = profile.user.registration_number;
        this.index_number = profile.user.index_number;
        this.courses = profile.user.courses;
        this.repeat_courses = profile.user.repeat_courses;
        // console.log(this.user);

      },
      error1 => {
        console.log(error1);
        return false;
      });
  }

  ngOnInit() {
  }

  onUpdate() {
    const user = {
      name: this.name,
      email: this.email
    };
    this.authService.updateUser(this.id, user).subscribe(data => {
      if (data.success) {
        this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/postgraduate/dashboard']);
      } else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/postgraduate/dashboard']);
      }
    });
  }

}
