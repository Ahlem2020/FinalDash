import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashComponent } from './Components/dash/dash.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SubjectComponent } from './Components/subject/subject.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventComponent } from './Components/event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JackpotComponent } from './Components/jackpot/jackpot.component';
import { PersonnComponent } from './Components/personn/personn.component';
import { NeedyComponent } from './Components/needy/needy.component';
import { NgToastModule } from 'ng-angular-popup';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    FooterComponent,
    SubjectComponent,
    EventComponent,
    JackpotComponent,
    PersonnComponent,
    NeedyComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule 
    ,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
