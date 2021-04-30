import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CallApiService } from '../services/call-api.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form-teacher',
  templateUrl: './add-form-teacher.component.html',
  styleUrls: ['./add-form-teacher.component.css']
})
export class AddFormTeacherComponent implements OnInit {
  formAdd:any;
  getDataTeacher:any;
  submit:boolean = false;
  constructor(public callapi: CallApiService, public recieve: Router, public fb:FormBuilder) { 
    this.formAdd = fb.group({
      teacherID: [""],
      teacherName: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      teacherTel: [null, [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      subjectTaught: [null, Validators.required],
    })
  }

  ngOnInit(): void {
    this.getAllDataTeacher();
  }
get f (){
  return this.formAdd.controls;
}

  addData(){
    this.submit = true;
    if(this.formAdd.valid){
      this.callapi.addDataTeacher(this.formAdd.value).subscribe(it => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Process',
          text: 'Success',
          confirmButtonText: `OK`
        })
        this.getAllDataTeacher();
      })
    }
  }

  getAllDataTeacher() {
    this.callapi.getDataTeacher().subscribe(std => {
      this.getDataTeacher= std;
    })
  }

}


