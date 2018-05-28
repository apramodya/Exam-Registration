import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../services/auth.service";
import {ValidateService} from "../../../services/validate.service";

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {

  name: String;
  email: String;
  index_number: Number;
  registration_number: String;
  year: Number;

  constructor(private router: Router, private flashMessages: FlashMessagesService, private authService: AuthService, private validateService: ValidateService) {
  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      index_number: this.index_number,
      registration_number: this.registration_number,
      year: this.year,
      password: this.index_number
    };

    // validate user details
    if (!this.validateService.validateRegister(user)) {
      this.flashMessages.show('Fill missing compulsory fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // validate email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessages.show('Enter a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success == true) {
        this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/admin/add-user']);
      }
      else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/admin/add-user']);
      }
    })
  };
}

