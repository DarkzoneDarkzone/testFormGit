import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { student } from '../models/classroom';
import { CallApiService } from '../services/call-api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  formAdd:any;
  getDataStudent:any;
  submit:boolean = false;
  constructor(public callapi: CallApiService, public recieve: Router, public fb:FormBuilder) { 
    this.formAdd = fb.group({
      studentID: [""],
      studentName: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      studentAge: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      studentTel: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]]
    })
  }

  ngOnInit(): void {
    this.getAllDataStudent();
  }
get f (){
  return this.formAdd.controls;
}

  addData(){
    this.submit = true;
    if(this.formAdd.valid){
      this.callapi.addDataStudent(this.formAdd.value).subscribe(it => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          text: 'Success',
          showConfirmButton: false,
          timer: 500
        })
        this.getAllDataStudent();
      })
    }
  }

  getAllDataStudent() {
    this.callapi.getDataStudent().subscribe(std => {
      this.getDataStudent= std;
    })
  }
  


}
