import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evenement } from '../model/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  
public fetchAll():Observable<Evenement[]>{

  return  this.http.get<Evenement[]>('http://localhost:8083/women/event/get-events');
  
}

public addevent(evenement:Evenement){
  return this.http.post<Evenement>('http://localhost:8083/women/event/ajout-eventa' , evenement);
}
public deleteevenet(id:number){
  return this.http.delete<Evenement>('http://localhost:8083/women/event/delete-event/'+ id)
}

}
