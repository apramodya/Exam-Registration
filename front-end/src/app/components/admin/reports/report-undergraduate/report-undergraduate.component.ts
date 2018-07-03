import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../../../services/course.service";
import {AuthService} from "../../../../services/auth.service";
import * as JsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-report-undergraduate',
  templateUrl: './report-undergraduate.component.html',
  styleUrls: ['./report-undergraduate.component.css']
})
export class ReportUndergraduateComponent implements OnInit {

  students: any;

  constructor(
    private courseService: CourseService,
    private authService: AuthService) {

    this.authService.getAllUsers().subscribe(data => {
      this.students = data;
    })
  }

  ngOnInit() {
  }

  genPDF() {
    var columns = ["#", "Index Number", "Courses"];
    var rows = [];
    this.students.forEach(function (element, index) {
      let x = [];
      element.courses.forEach(function (e) {
        x.push(e.subject);
      });
      rows.push([index + 1, element.index_number, x]);
    });

    let doc = new JsPDF('p', 'pt');
    doc.autoTable(columns, rows);
    doc.save("report.pdf");
  }

}
