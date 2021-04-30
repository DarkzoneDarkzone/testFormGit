import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CallApiService } from '../services/call-api.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  getDataTeacher:any;
  formView:any;
  constructor( public callapi:CallApiService, public sentData:Router) { }

  ngOnInit(): void {
    this.getAllDataTeacher();
  }
  getAllDataTeacher(){
    this.callapi.getDataTeacher().subscribe(tc => {
      this.getDataTeacher = tc;
    })
  }
  deleteData(teacherID: string){
    this.callapi.deleteDataTeacher(teacherID).subscribe( tc=> {
      Swal.fire({
        icon: 'success',
        title: 'finished...',
        showConfirmButton: false,
        timer: 600,
        width: 300,
      })
      this.getAllDataTeacher();
    })
  }
  editData(teacherId:string){
    this.sentData.navigate(['edit-teach',{tcID: teacherId}]);
  }

}
