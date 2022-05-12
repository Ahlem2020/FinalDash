import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  constructor(private httpClient: HttpClient) {

  }
  getPartners():Observable<any>{
   return this.httpClient.get("http://localhost:8083/women/partner/get-allPartners")
 }
 deletePartner( idp:any){
   return this.httpClient.delete("http://localhost:8083/women/partner/delete-profil/"+idp)
 }
}
