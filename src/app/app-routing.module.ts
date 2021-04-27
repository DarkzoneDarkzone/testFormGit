import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveFormComponent } from './remove-form/remove-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { MainComponent } from './main/main.component';
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [
  { path: 'edit-form', component: EditFormComponent },
  { path: 'remove-form', component: RemoveFormComponent },
  { path: 'view-form', component: ViewFormComponent },
  { path: 'main', component: MainComponent },
  { path: 'add-form', component:AddFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
