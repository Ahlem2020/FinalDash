import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adv } from 'src/app/Model/adv';

@Injectable({
  providedIn: 'root'
})
export class AdvService {
 
 
  constructor(private http : HttpClient) { }
  
  url: string ='http://localhost:8083/women/Ad/'
  public ShowAllAds(): Observable<Adv[]> {
    return this.http.get<Adv[]>(this.url+'All');
  }
  add(pub:Adv , upload) {
    let formdata = new FormData();
    var datePipe = new DatePipe('en-US');

     formdata.append('nameAd', pub.nameAd);
    formdata.append('canal', pub.canal);
    formdata.append('nbVueCible', pub.nbVueCible);
    formdata.append('dateDeb', datePipe.transform(pub.dateDeb, 'dd/MM/yyyy'));
    formdata.append('dateFin', datePipe.transform(pub.dateFin, 'dd/MM/yyyy'));
    formdata.append('nbVueFinal', "0");
    formdata.append('domain',"Informatique");
    formdata.append('price', pub.price );
    formdata.append('upload', upload);
    return this.http.post<Adv[]>(this.url+'AddAdvertisement', formdata)

    }

  
  
}
