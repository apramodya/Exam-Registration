import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private router: Router, private flashMessages: FlashMessagesService, private authService: AuthService) {
  }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      index_number: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user, data.user.type);
        this.flashMessages.show('You are now logged in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/']);
      }
      else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/login']);
      }
    });
  };

}
