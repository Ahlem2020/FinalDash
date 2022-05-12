import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { Module } from '../Model/Module';



@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  url:string='http://localhost:8083/women/module/'
  constructor(private condidacy:HttpClient) { }

  public fetchAll():Observable<Module[]>{
    return this.condidacy.get<Module[]>(this.url+'retrieve-module')
  }

  

  public addModule (todo: Module,id:number) {

    return this.condidacy.post<Module>(this.url + 'add-module/'+id, todo);
  }

  public delete(id: number) {
    return this.condidacy.delete<Module>(this.url + 'delete-module/' + id);
  }

  public findById(id: number) {
    return this.condidacy.get<Module>(this.url + 'find-by-id/' + id);
  }

  public update( id:number,todo: Module) {
    return this.condidacy.put<Module>(this.url + 'modifier-module/'+id, todo);
  }

}
