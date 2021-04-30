import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';
import { student } from '../models/classroom';
import { CallApiService } from '../services/call-api.service';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {
  getDataStudent:any;
  formView:any;
  constructor( public callapi: CallApiService, public sentData: Router ) { }

  ngOnInit(): void {
    this.getAllDataStudent();
    
  }
  getAllDataStudent() {
    this.callapi.getDataStudent().subscribe(std => {
      this.getDataStudent= std;
    })
  }
  deleteData(studentID:string){
      this.callapi.deleteDataStudent(studentID).subscribe(it => {
        Swal.fire({
          icon: 'success',
          title: 'finished...',
          showConfirmButton: false,
          timer: 600,
          width: 300,
        })
        this.getAllDataStudent();
      })
  }

  editData(studentID:string){
      this.sentData.navigate(['edit-form',{stdID: studentID}]);
  }
}
