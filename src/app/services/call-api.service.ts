import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { classroom, student, teacher } from '../models/classroom';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(public http: HttpClient) { }
  public getDataStudent() {
    return this.http.get<student>(`${environment.apiUrl}Classroom/GetdataStudentAll`)
  }
  public getDataTeacher() {
    return this.http.get<teacher>(`${environment.apiUrl}Classroom/GetdataTeacherAll`)
  }
  public getDataClassroom() {
    return this.http.get<classroom>(`${environment.apiUrl}Classroom/GetdataClassroomAll`)
  }
  public addDataFormInBoot(dataForm: student) {
    return this.http.post<student>(`${environment.apiUrl}Classroom/AddDataStudent`, dataForm);
  }
  public deleteDataStudent(id:string){
    return this.http.delete<student>(`${environment.apiUrl}Classroom/DeleteDataStudent/${id}`);
  }
}
