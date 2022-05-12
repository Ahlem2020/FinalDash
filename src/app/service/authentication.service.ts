import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionDetails } from '../models/connection-details';
import { LoginDetails } from '../models/login-details';
import { Partner } from '../models/partner';
import { ResetPassword } from '../models/reset-password';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public http: HttpClient) {}

  private baseUrl = 'http://localhost:8083';

  authenticate(cd: ConnectionDetails): Observable<LoginDetails> {
    return this.http.post<LoginDetails>(
      this.baseUrl + '/women/user/signin',
      cd
    );
  }
  register(user:User): Observable<String>{
    return this.http.post<String>(
      this.baseUrl + '/women/user/signup',
      user
    );
  }
  authenticatePartner(cd: ConnectionDetails): Observable<LoginDetails> {
    return this.http.post<LoginDetails>(
      this.baseUrl + '/women/partner/signin',
      cd
    );
  }
  registerPartner(user:Partner): Observable<String>{
    return this.http.post<String>(
      this.baseUrl + '/women/partner/signup',
      user
    );
  }
  authenticateAdmin(cd: ConnectionDetails): Observable<LoginDetails> {
    return this.http.post<LoginDetails>(
      this.baseUrl + '/women/admin/signin',
      cd
    );
  }

  getUserByEmail(email:String): Observable<User> {
    return this.http.get<User>(
      this.baseUrl + '/women/user/get-UserByEmail/'+email
    );
  }

  resetPasswordUser(cn:ConnectionDetails): Observable<any>{
    return this.http.post<ConnectionDetails>(
      this.baseUrl + '/women/forget',cn
    );
  }
  changePasswordResetUser(cn:ResetPassword): Observable<any>{
    return this.http.post<ResetPassword>(
      this.baseUrl + '/women/reset',cn
    );
  }
  resetPasswordPartner(cn:ConnectionDetails): Observable<any>{
    return this.http.post<ConnectionDetails>(
      this.baseUrl + '/women/forgetpartner',cn
    );
  }

  logout() {
    localStorage.removeItem("loginDetails")
    localStorage.removeItem("token")
    console.log(this.isUserLoggedIn());
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('token');
    if (!user || user === '') return false;
    else return true;
  }
}
