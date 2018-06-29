import { Component, OnInit } from '@angular/core';
import * as JsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-report-postgraduate',
  templateUrl: './report-postgraduate.component.html',
  styleUrls: ['./report-postgraduate.component.css']
})
export class ReportPostgraduateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

  genPDF() {
    var columns = ["ID", "Name", "Country"];
    var rows = [
      [1, "Shaw", "Tanzania"],
      [2, "Nelson", "Kazakhstan"],
      [3, "Garcia", "Madagascar"]
    ];

    let doc = new JsPDF('p', 'pt');
    doc.autoTable(columns, rows);
    doc.save("table.pdf");
  }

}
