import { CheckQuizComponent } from './Components/front/quiz/check-quiz/check-quiz.component';
import { ContactsComponent } from './users/contacts/contacts.component';
import { CreateTrainingComponent } from './Components/Admin/training/create-training/create-training.component';
import { CreateQuizComponent } from './Components/Admin/quiz/create-quiz/create-quiz.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ListPenalitiesComponent } from './Components/Admin/penality/list-penalities/list-penalities.component';
import { TrainingDetailsComponent } from './Components/Admin/training/training-details/training-details.component';
import { ListComponent } from './Components/Admin/training/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './Components/dash/dash.component';

import { ListQuizComponent } from './Components/Admin/quiz/list-quiz/list-quiz.component';
import { TrainingListComponent } from './Components/front/training-list/training-list.component';
import { AddQuizComponent } from './Components/Admin/quiz/add-quiz/add-quiz.component';
import { TrainingInfoComponent } from './Components/front/training-info/training-info.component';
import { ClotureComponent } from './Components/front/quiz/cloture/cloture.component';
import { UpdateTrainingComponent } from './Components/Admin/training/update-training/update-training.component';
import { UploadComponent } from './Components/upload/upload.component';
import { LoginComponent } from './Components/login/login.component';
import { EventComponent } from './Components/event/event.component';
import { JackpotComponent } from './Components/jackpot/jackpot.component';
import { PersonnComponent } from './Components/personn/personn.component';
import { ShowAllComponent } from './Components/Admin/jobOffer/show-all/show-all.component';
import { UpdateModuleComponent } from './Components/update-module/update-module.component';
import { UpdateCondidacyComponent } from './Components/update-condidacy/update-condidacy.component';
import { ShowAllmoduleComponent } from './Components/show-allmodule/show-allmodule.component';

import { NotFoundComponent } from './Components/not-found/not-found.component';





const routes: Routes = [

  // FrontOffice
  {path: 'trainings' , component: TrainingListComponent},
  {
    path: 'hotels/:id/edit',
    component: CreateQuizComponent,
    canDeactivate: []
  },

  {path: '-quiz/:id' , component: CheckQuizComponent},
  {path: 'rs' , component: ClotureComponent},
  {path: 'info/:id' , component: TrainingInfoComponent},

  {path:  'login', component: LoginComponent},

  {path: 'image' , component: 
UploadComponent},

  {path: 'create-quiz' , component: ContactsComponent},
  // Admin 

  {path: 'add' , component: AddQuizComponent},

  {
    path: 'dash' , component: DashComponent
  
  },
  {path: 'home' , component: WelcomeComponent},
  {path: 'training' , component: ListComponent},
  {path: 'training-details/:id' , component: TrainingDetailsComponent},
  {path: 'update-training/:id' , component: UpdateTrainingComponent},
  {path: 'create-training', component: CreateTrainingComponent},

  {path: 'penality' , component: ListPenalitiesComponent},

  {path: 'quiz' , component: ListQuizComponent},

  {
    path: 'event', component : EventComponent
  },
  {
    path: 'jackpot', component : JackpotComponent
  },
  {
    path: 'upload', component : PersonnComponent
  },

  {
    path: 'Show' , component: ShowAllComponent
  
  },

  {
    path: 'dash' , component: DashComponent
 
  },
  {path:"showall", component: ShowAllComponent}
,
 
 
  {path:'moduleUpdate', component: UpdateModuleComponent },
 
  {path:'condidacyUpdate', component: UpdateCondidacyComponent },
 
  {
    path: 'module', component : ShowAllmoduleComponent
  },

 



{path : '**' , component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
