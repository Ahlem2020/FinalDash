import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashComponent } from './Components/dash/dash.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SubjectComponent } from './Components/subject/subject.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowAllComponent } from './Components/show-all/show-all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ShowAllmoduleComponent } from './Components/show-allmodule/show-allmodule.component';
import { UpdateModuleComponent } from './Components/update-module/update-module.component';
import { UpdateCondidacyComponent } from './Components/update-condidacy/update-condidacy.component';
import {  Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    FooterComponent,
    SubjectComponent,
    ShowAllComponent,
    ShowAllmoduleComponent,
    UpdateModuleComponent,
    UpdateCondidacyComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,  
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
