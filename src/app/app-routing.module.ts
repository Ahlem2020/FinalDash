import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './Components/dash/dash.component';
import { EventComponent } from './Components/event/event.component';
import { JackpotComponent } from './Components/jackpot/jackpot.component';
import { PersonnComponent } from './Components/personn/personn.component';
import { SubjectComponent } from './Components/subject/subject.component';


const routes: Routes = [

  {
    path: 'dash' , component: DashComponent
  
  },
  {
    path: 'subject', component : SubjectComponent
  },
  {
    path: 'event', component : EventComponent
  },
  {
    path: 'jackpot', component : JackpotComponent
  },
  {
    path: 'upload', component : PersonnComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
