import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(public http: HttpClient) {}

  private baseUrl = 'http://localhost:8083/women/admin';

  activateDesactivateUser(idUser:any,status:any):Observable<any>{
    return this.http.put<any>(
      this.baseUrl + '/User-activate-disactivate/'+idUser+"/"+status,""
    );
  }
  activateDesactivatePartner(id:any,status:any):Observable<any>{
    return this.http.put<any>(
      this.baseUrl + '/Partner-activate-disactivate/'+id+"/"+status,""
    );
  }

}
