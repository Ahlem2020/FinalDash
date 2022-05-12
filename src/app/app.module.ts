import { UpdateModuleComponent } from './Components/update-module/update-module.component';
import { JackpotComponent } from './Components/jackpot/jackpot.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashComponent } from './Components/dash/dash.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './Components/Admin/training/list/list.component';
import { TrainingDetailsComponent } from './Components/Admin/training/training-details/training-details.component';
import { ListPenalitiesComponent } from './Components/Admin/penality/list-penalities/list-penalities.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateTrainingComponent } from './Components/Admin/training/update-training/update-training.component';
import { ListQuizComponent } from './Components/Admin/quiz/list-quiz/list-quiz.component';
import { ShowComponent } from './Components/User/quiz/show/show.component';
import { ShowTrainingsComponent } from './Components/User/training/show-trainings/show-trainings.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { NavbComponent } from './Components/front/navb/navb.component';
import { TrainingListComponent } from './Components/front/training-list/training-list.component';
import { AddQuizComponent } from './Components/Admin/quiz/add-quiz/add-quiz.component';
import { CreateQuizComponent } from './Components/Admin/quiz/create-quiz/create-quiz.component';
import { CheckQuizComponent } from './Components/front/quiz/check-quiz/check-quiz.component';
import { HeaderComponent } from './Components/front/header/header.component';
import { CreateTrainingComponent } from './Components/Admin/training/create-training/create-training.component';
import { ContactsComponent } from './users/contacts/contacts.component';
import { TrainingInfoComponent } from './Components/front/training-info/training-info.component';
import { TestComponent } from './Components/front/test/test.component';
import { ClotureComponent } from './Components/front/quiz/cloture/cloture.component';
import { CountdownModule } from 'ngx-countdown';
import { UploadComponent } from './Components/upload/upload.component';
import { LoginComponent } from './Components/login/login.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { EventComponent } from './Components/event/event.component';
import { ShowAllComponent } from './Components/Admin/jobOffer/show-all/show-all.component';
import { ShowAllmoduleComponent } from './Components/show-allmodule/show-allmodule.component';
import { ShowAllCondidComponent } from './Components/show-all-condid/show-all-condid.component';
import { UpdateCondidacyComponent } from './Components/update-condidacy/update-condidacy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    FooterComponent,

    ListComponent,
    TrainingDetailsComponent,
    ListPenalitiesComponent,
    UpdateTrainingComponent,
    ListQuizComponent,
    ShowComponent,
    ShowTrainingsComponent,
    WelcomeComponent,
    NavbComponent,
    TrainingListComponent,
    AddQuizComponent,
    CreateQuizComponent,
    CheckQuizComponent,
    HeaderComponent,
    CreateTrainingComponent,
    ContactsComponent,
    TrainingInfoComponent,
    ClotureComponent,
    UploadComponent,
    LoginComponent,
    JackpotComponent,
    EventComponent,
    ShowAllComponent,
    ShowAllmoduleComponent,
    UpdateModuleComponent,
    UpdateCondidacyComponent,
    ShowAllCondidComponent,

    
   

   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    CountdownModule,
    NgbToastModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
