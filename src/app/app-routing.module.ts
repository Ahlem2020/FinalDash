import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AdvComponent } from './Components/adv/adv.component';
import { NewAdComponent } from './Components/Adv/new-ad/new-ad.component';
 
import { DashComponent } from './Components/dash/dash.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AddComponent } from './Components/subject/add/add.component';
import { SubjectComponent } from './Components/subject/subject.component';
import { UpdateComponent } from './Components/subject/update/update.component';
 

const routes: Routes = [

  {
    path: 'dash' , component: DashComponent
  
  },
  {
    path: 'subject' , component: SubjectComponent
  },
{
  path : 'addSubject' , component: AddComponent 
},
{path : 'chat' , component: ChatComponent},
{path: 'updateSubject' , component: UpdateComponent},
{path : 'advertismenet' , component: AdvComponent},
{path : 'addAdv' ,component: NewAdComponent},
{path : '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
