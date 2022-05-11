import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { Condidacy } from '../module/condidacy';
import { Module } from '../module/Module';



@Injectable({
  providedIn: 'root'
})
export class CondidacyService {

  url:string='http://localhost:8083/women/condidacy/'
  constructor(private condidacy:HttpClient) { }

  public fetchAll():Observable<Condidacy[]>{
    return this.condidacy.get<Condidacy[]>(this.url+'retrieve-condidacy')
  }

  public fetchEduc(id:number):Observable<Condidacy[]>{
    return this.condidacy.get<Condidacy[]>(this.url+'retrieve-educ-condidacy/'+id)
  }

  
public addCondidacy(c: Condidacy){
  return this.condidacy.post<Condidacy>(this.url+'add-condidacy',c);
}

public delete(id: number) {
  return this.condidacy.delete<Condidacy>(this.url + 'delete-condidacy/' + id);
}

public update(id: number, c: Condidacy) {
  return this.condidacy.put<Condidacy>(this.url + 'modifier-condidacy/' + id, c);
}
public findById(id: number) {
  return this.condidacy.get<Condidacy>(this.url + 'find-by-id/' + id);
}

public showModule(id:number){

  return this.condidacy.get<Module[]>(this.url+'showModule/'+id);
}
}