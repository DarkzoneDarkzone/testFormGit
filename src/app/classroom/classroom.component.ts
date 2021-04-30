import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CallApiService } from '../services/call-api.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  getDataStudent:any;
  getDataTeacher:any;
  getDataClassroom: any;
  getDataClassroomID: any;
  formClass: any;
  submit: boolean = false;
  constructor(public callapi: CallApiService, public sentData: Router, public fb: FormBuilder) {
    this.formClass = fb.group({
      classroomID: [null],
      classroomName: [null, [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
      classStudent: [null],
      classTeacher: [null]
    })
  }
  get f() {
    return this.formClass.controls;
  }

  ngOnInit(): void {
    this.getAllDataClassroom();
    this.getAllDataStudent();
    this.getAllDataTeacher();
  }
  getAllDataClassroom() {
    this.callapi.getDataClassroom().subscribe(cr => {
      this.getDataClassroom = cr;
    })
  }
  deleteData(classroomID: string) {
    this.callapi.deleteClassroom(classroomID).subscribe(tc => {
      Swal.fire({
        icon: 'success',
        title: 'Deleted...',
        showConfirmButton: false,
        timer: 600,
        width: 300,
      })
      this.getAllDataClassroom();
    })
  }

  createClassroom() {
    this.submit = true;
    if (this.formClass.valid) {
      this.callapi.createClassroom(this.formClass.value).subscribe(cr => {
        Swal.fire({
          icon: 'success',
          title: 'Added...',
          showConfirmButton: false,
          timer: 600,
          width: 300,
        })
        this.getAllDataClassroom();
      })
    }
  }

  getDataClassroomByID(classroomID: string) {
    this.callapi.getDataClassroomByID(classroomID).subscribe(cr => {
      this.getDataClassroomID = cr;
    })
  }

  getAllDataStudent() {
    this.callapi.getDataStudent().subscribe(std => {
      this.getDataStudent= std;
      console.log(this.getDataStudent);
    })
  }
  getAllDataTeacher() {
    this.callapi.getDataTeacher().subscribe(tc => {
      this.getDataTeacher= tc;
      console.log(this.getDataStudent);
    })
  }

  addStudentToClass(crID: string, stdID: string){
    this.callapi.addStudentToClassroom(crID, stdID).subscribe(stcTocr=>{
    this.getAllDataClassroom();  
    })
  }
  addTeacherToClass( crID: string, tcID: string ){
    this.callapi.addTeacherToClassroom( crID, tcID ).subscribe(tcTocr=>{
      this.getAllDataClassroom();
    })
  }

}
