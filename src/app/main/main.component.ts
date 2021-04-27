import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../services/call-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  getDataStudent: any;
  getDataTeacher: any;
  getDataClassroom: any;
  constructor(public callapi: CallApiService) { }


  ngOnInit(): void {
    this.getAllDataStudent();
    this.getAllDataTeacher();
    this.getAllDataClassroom();
  }

  getAllDataClassroom() {
    this.callapi.getDataClassroom().subscribe(cr => {
      this.getDataClassroom = cr;
      console.log(cr);
      
    })
  }

  getAllDataTeacher() {
    this.callapi.getDataTeacher().subscribe(tc => {
      this.getDataTeacher = tc;
    })
  }

  getAllDataStudent() {
    this.callapi.getDataStudent().subscribe(std => {
      this.getDataStudent = std;
    })
  }

}
