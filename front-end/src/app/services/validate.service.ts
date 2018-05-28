import {Injectable} from '@angular/core';
import {isNumeric} from "tslint";

@Injectable()
export class ValidateService {

  constructor() {
  }

  validateRegister(user) {
    if (user.name == undefined || user.email == undefined || user.index_number == undefined || user.registration_number == undefined || user.year == undefined) {
      return false
    }
    else
      return true
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateCourse(course) {
    if (course.course_name == undefined || course.course_code == undefined || course.year == undefined || course.semester == undefined ) {
      return false
    }
    else
      return true
  }
}
