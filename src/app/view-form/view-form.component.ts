import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../services/call-api.service';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {
  getDataStudent:any;
  formView:any;
  //submit:boolean = false;
  constructor( public callapi: CallApiService ) { }

  ngOnInit(): void {
    this.getAllDataStudent();
    
  }
  getAllDataStudent() {
    this.callapi.getDataStudent().subscribe(std => {
      this.getDataStudent= std;
    })
  }
  deleteData(studentID:string){
  //  this.submit = true;
      this.callapi.deleteDataStudent(studentID).subscribe(it => {
        this.getAllDataStudent();
      })
  }
  

}
