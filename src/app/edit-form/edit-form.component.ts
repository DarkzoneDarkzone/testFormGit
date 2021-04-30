import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { student } from '../models/classroom';
import { CallApiService } from '../services/call-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  editStudent:any;
  formEdit:any;
  studentID:any;
  getData:any;
  submit:boolean = false;
  constructor(public callapi: CallApiService, public recieve: ActivatedRoute, public fb: FormBuilder) {
    this.formEdit = fb.group({
      studentID: [""],
      studentName: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      studentAge: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      studentTel: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]]
    })
  }

  get f (){
    return this.formEdit.controls;
  }

  ngOnInit() {
    this.studentID = this.recieve.snapshot.paramMap.get('stdID');
    this.getDataStudentByID(this.studentID); 
  }

  editData(){
    this.submit = true;
    this.formEdit.value.studentID = this.studentID;
    console.log(this.formEdit.value);
    if(this.formEdit.valid){
      this.callapi.editDataStudent(this.formEdit.value).subscribe(it => {
        
      })
    }
  }

  getDataStudentByID(studentID:string){
    this.callapi.getDataStudentByID(studentID).subscribe(std => {
      this.getData= std;
    })
  }

  editDataStudent(student:student){
    this.callapi.editDataStudent(student).subscribe(it => {
    })
  }

}
