import {Component, OnInit} from '@angular/core';
import {StatusService} from "../../../services/status.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-current-status',
  templateUrl: './admin-current-status.component.html',
  styleUrls: ['./admin-current-status.component.css']
})
export class AdminCurrentStatusComponent implements OnInit {

  year: Number;
  semester: Number;
  id: String;

  constructor(private statusService: StatusService, private flashMessages: FlashMessagesService, private router: Router) {
  }

  ngOnInit() {
    this.statusService.getStatus().subscribe(data => {
      this.id = data.status.id;
      this.year = data.status.examination_year;
      this.semester = data.status.semester;
    });
  }

  onSubmit() {

    const status = {
      examination_year: this.year,
      semester: this.semester
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
