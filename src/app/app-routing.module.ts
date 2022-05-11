import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './Components/dash/dash.component';
import { ShowAllComponent } from './Components/show-all/show-all.component';
import { ShowAllmoduleComponent } from './Components/show-allmodule/show-allmodule.component';
import { SubjectComponent } from './Components/subject/subject.component';
import { UpdateCondidacyComponent } from './Components/update-condidacy/update-condidacy.component';
import { UpdateModuleComponent } from './Components/update-module/update-module.component';

const routes: Routes = [

  {
    path: 'dash' , component: DashComponent
  
  },
  {path:"showall", component: ShowAllComponent}
,
  {
    path: 'subject', component : SubjectComponent
  },

  {path:'moduleUpdate', component: UpdateModuleComponent },

  {path:'condidacyUpdate', component: UpdateCondidacyComponent },

  {
    path: 'module', component : ShowAllmoduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
