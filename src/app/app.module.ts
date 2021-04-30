import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddFormComponent } from './add-form/add-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { AddFormTeacherComponent } from './add-form-teacher/add-form-teacher.component';
import { EditTeachComponent } from './edit-teach/edit-teach.component';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    EditFormComponent,
    ViewFormComponent,
    MainComponent,
    AddFormComponent,
    EditTeacherComponent,
    ClassroomComponent,
    AddFormTeacherComponent,
    EditTeachComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
