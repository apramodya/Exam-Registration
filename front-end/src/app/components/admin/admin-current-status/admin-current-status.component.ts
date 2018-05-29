import {Component, OnInit} from '@angular/core';
import {StatusService} from "../../../services/status.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {D} from "@angular/core/src/render3";

@Component({
  selector: 'app-admin-current-status',
  templateUrl: './admin-current-status.component.html',
  styleUrls: ['./admin-current-status.component.css']
})
export class AdminCurrentStatusComponent implements OnInit {

  id: String;
  u_year: Number;
  u_semester: Number;
  u_allow: Boolean;
  u_deadline: Date;
  p_year: Number;
  p_semester: Number;
  p_allow: Boolean;
  p_deadline: Date;

  constructor(private statusService: StatusService, private flashMessages: FlashMessagesService, private router: Router) {
  }

  ngOnInit() {
    this.statusService.getStatus().subscribe(data => {
      this.id = data.status.id;
      this.u_year = data.status.u_examination_year;
      this.u_semester = data.status.u_semester;
      this.u_allow = data.status.u_allow;
      this.u_deadline = data.status.u_deadline;
      this.p_year = data.status.p_examination_year;
      this.p_semester = data.status.p_semester;
      this.p_allow = data.status.p_allow;
      this.p_deadline = data.status.p_deadline;
    });
  }

  onSubmit() {

    const status = {
      p_examination_year: this.p_year,
      p_semester: this.p_semester,
      p_allow: this.p_allow,
      p_deadline: this.p_deadline,
      u_examination_year: this.u_year,
      u_semester: this.u_semester,
      u_allow: this.u_allow,
      u_deadline: this.u_deadline
    };
    this.statusService.updateStatus(this.id, status).subscribe(data => {
      if (data.success) {
        this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/admin/add-current-status']);
      }
      else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/admin/add-current-status']);
      }
    });
  }
}
