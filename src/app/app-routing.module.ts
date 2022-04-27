import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './Components/dash/dash.component';
import { SubjectComponent } from './Components/subject/subject.component';

const routes: Routes = [

  {
    path: 'dash' , component: DashComponent
  
  },
  {
    path: 'subject', component : SubjectComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
