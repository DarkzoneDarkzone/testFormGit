import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { teacher } from '../models/classroom';
import { CallApiService } from '../services/call-api.service';

@Component({
  selector: 'app-edit-teach',
  templateUrl: './edit-teach.component.html',
  styleUrls: ['./edit-teach.component.css']
})
export class EditTeachComponent implements OnInit {

  editTeacher:any;
  formTeacherEdit:any;
  teacherID:any;
  getData:any;
  submit:boolean = false;
  constructor(public callapi: CallApiService, public recieve: ActivatedRoute, public fb: FormBuilder) {
    this.formTeacherEdit = fb.group({
      teacherID: [""],
      teacherName: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      teacherTel: [null, [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      subjectTaught: [null, Validators.required]
    })
  }

  get f (){
    return this.formTeacherEdit.controls;
  }

  ngOnInit() {
    this.teacherID = this.recieve.snapshot.paramMap.get('tcID');
    this.getDataTeacherByID(this.teacherID); 
  }

  editData(){
    this.submit = true;
    this.formTeacherEdit.value.teacherID = this.teacherID;
    console.log(this.formTeacherEdit.value);
    if(this.formTeacherEdit.valid){
      this.callapi.editDataTeacher(this.formTeacherEdit.value).subscribe(it => {
        
      })
    }
  }

  getDataTeacherByID(teacherID:string){
    this.callapi.getDataTeacherByID(teacherID).subscribe(tc => {
      this.getData= tc;
    })
  }

  editDataTeacher(teacher: teacher){
    this.callapi.editDataTeacher(teacher).subscribe(it => {
    })
  }
}
