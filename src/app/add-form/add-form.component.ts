import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { student } from '../models/classroom';
import { CallApiService } from '../services/call-api.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  formAdd:any;
  submit:boolean = false;
  constructor(public callapi: CallApiService, public recieve: Router, public fb:FormBuilder) { 
    this.formAdd = fb.group({
      studentID: [""],
      studentName: [null, Validators.required],
      studentAge: [null, Validators.required],
      studentTel: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }
get f (){
  return this.formAdd.controls;
}

  addData(){
    this.submit = true;
    if(this.formAdd.valid){
      this.callapi.addDataFormInBoot(this.formAdd.value).subscribe(it => {
        console.log(this.formAdd.value);
        
      })
    }
  }
  


}
