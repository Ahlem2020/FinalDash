import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashComponent } from './Components/dash/dash.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubjectComponent } from './Components/subject/subject.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './Components/subject/add/add.component';
import { UpdateComponent } from './Components/subject/update/update.component';
import { FormsModule } from '@angular/forms';
import { AdvComponent } from './Components/adv/adv.component';
import { NewAdComponent } from './Components/Adv/new-ad/new-ad.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ClientComponent } from './client/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule}from 'ngx-pagination';
import { ChatComponent } from './chat/chat.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    FooterComponent,
    SubjectComponent,
    AddComponent,
    UpdateComponent,
    AdvComponent,
    NewAdComponent,
    NotFoundComponent,
    ClientComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
