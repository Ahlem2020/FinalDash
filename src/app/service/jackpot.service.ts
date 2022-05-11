import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Evenement } from '../model/event';
import { Jackpot } from '../model/jackpot';

@Injectable({
  providedIn: 'root'
})
export class JackpotService {

  constructor(private http:HttpClient) { }


  public fetchencours():Observable<Jackpot[]>{

    return  this.http.get<Jackpot[]>('http://localhost:8083/women/jackpot/jackpots-encours');
    
  }
  public fetchALL():Observable<Jackpot[]>{

    return  this.http.get<Jackpot[]>('http://localhost:8083/women/jackpot/jackpots');
    
  }

  public deletejackpot(id:number){
    return this.http.delete<Jackpot>('http://localhost:8083/women/jackpot/delete-jackpot/'+ id)
  }
  
  public adddjackpot(jackpot:Jackpot){
    return this.http.post<Jackpot>('http://localhost:8083/women/jackpot/ajout-jackpot/ENCOURS',jackpot);
  }
  public attribuatejack(id:number){
    return this.http.get<Jackpot>('http://localhost:8083/women/jackpot/att/'+id);
  }
}
