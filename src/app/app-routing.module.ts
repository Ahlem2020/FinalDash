import { ShowAllComponent } from './Components/show-all/show-all.component';
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
  {
    path: 'Show' , component: ShowAllComponent
  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
