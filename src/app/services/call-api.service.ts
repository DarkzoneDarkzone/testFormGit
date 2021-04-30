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
  public getDataStudentByID(id: string) {
    return this.http.get<student>(`${environment.apiUrl}Classroom/GetdataStudentByid/${id}`);
  }
  public addDataStudent(student: student) {
    return this.http.post<student>(`${environment.apiUrl}Classroom/AddDataStudent`, student);
  }
  public deleteDataStudent(id:string){
    return this.http.delete<student>(`${environment.apiUrl}Classroom/DeleteDataStudent/${id}`);
  }
  public editDataStudent(student:student){
    return this.http.put<student>(`${environment.apiUrl}Classroom/EditDataStudent`, student);
  }
  public getDataTeacher() {
    return this.http.get<teacher>(`${environment.apiUrl}Classroom/GetdataTeacherAll`)
  }
  public getDataTeacherByID(id: string) {
    return this.http.get<teacher>(`${environment.apiUrl}Classroom/GetdataTeacherByid/${id}`);
  }
  public addDataTeacher(teacher: teacher) {
    return this.http.post<teacher>(`${environment.apiUrl}Classroom/AddDataTeacher`, teacher);
  }
  public deleteDataTeacher(id:string){
    return this.http.delete<teacher>(`${environment.apiUrl}Classroom/DeleteDataTeacher/${id}`);
  }
  public editDataTeacher(teacher:teacher){
    return this.http.put<teacher>(`${environment.apiUrl}Classroom/EditDataTeacher`, teacher);
  }
  public getDataClassroom() {
    return this.http.get<classroom>(`${environment.apiUrl}Classroom/GetdataClassroomAll`)
  }
  public getDataClassroomByID(id: string) {
    return this.http.get<classroom>(`${environment.apiUrl}Classroom/GetdataClassroomByid/${id}`);
  }
  public createClassroom(classroom: classroom) {
    return this.http.post<classroom>(`${environment.apiUrl}Classroom/CreateClassroom`, classroom);
  }
  public deleteClassroom(id: string) {
    return this.http.delete<classroom>(`${environment.apiUrl}Classroom/DeletedClassroom/${id}`);
  }
  public addStudentToClassroom(crID: string, stdID: string) {
    return this.http.get<classroom>(`${environment.apiUrl}Classroom/AddStudentInClassroom/${crID}/${stdID}`);
  }
  public addTeacherToClassroom(crID: string, tcID: string) {
    return this.http.get<classroom>(`${environment.apiUrl}Classroom/AddTeacherInClassroom/${crID}/${tcID}`);
  }
}
