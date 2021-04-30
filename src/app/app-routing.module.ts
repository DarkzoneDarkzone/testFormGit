import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { MainComponent } from './main/main.component';
import { AddFormComponent } from './add-form/add-form.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { ClassroomComponent } from './classroom/classroom.component'
import { EditTeachComponent } from './edit-teach/edit-teach.component'
import { AddFormTeacherComponent } from './add-form-teacher/add-form-teacher.component';

const routes: Routes = [
  { path: 'edit-form', component: EditFormComponent },
  { path: 'view-form', component: ViewFormComponent },
  { path: 'main', component: MainComponent },
  { path: 'add-form', component:AddFormComponent },
  { path: 'edit-teacher', component: EditTeacherComponent },
  { path: 'classroom', component: ClassroomComponent },
  { path: 'edit-teach', component: EditTeachComponent },
  { path: 'add-form-teacher', component: AddFormTeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
