import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMeetingFormComponent } from './add-meeting-form/add-meeting-form.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AvailablePartnersListComponent } from './available-partners-list/available-partners-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginPartnerComponent } from './login-partner/login-partner.component';
import { LoginComponent } from './login/login.component';
import { MeetRequestsComponent } from './meet-requests/meet-requests.component';
import { PartnersComponent } from './partners/partners.component';
import { ProfileComponent } from './profile/profile.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RegisterPartnerComponent } from './register-partner/register-partner.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SelectLoginComponent } from './select-login/select-login.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'select-login', component: SelectLoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-partner', component: LoginPartnerComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-partner', component: RegisterPartnerComponent },
  { path: 'reclamation', component: ReclamationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'users', component: ClientComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'meetings', component: CalendarComponent },
  { path: 'add-meeting', component: AddMeetingFormComponent },
  { path: 'available-partners/:idMeeting', component: AvailablePartnersListComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'meetings-requests', component: MeetRequestsComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
