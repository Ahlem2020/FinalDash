import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../Model/Subject';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http : HttpClient) { }
  url: string ='http://localhost:8083/women/Subject/'

//find all subject
  public ShowAll(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.url+'All');
}
//ADD
 
  add(subject : Subject, imageSubject) {
    let formdata = new FormData();
    formdata.append('Name', subject.name);
    formdata.append('Description', subject.description);
    formdata.append('domain',"Informatique");
    formdata.append('nbLike', "0");
    formdata.append('nbDislike' ,"0");
    formdata.append('ImageSubject', imageSubject);
    formdata.append('nbVue', "0");

 
return this.http.post(this.url+'AddSubject',formdata)
}

//Show By id

getsubjectById(id : number): Observable<Subject>{
  return this.http.get<Subject>(this.url+id); 
}


//DeleteSubject

delete(id : number): Observable<Subject>{
  return this.http.delete<Subject>(this.url+'DeleteSubject/' +id)
}
//Find By ID
public findById(id : number): Observable<Subject>{
  return this.http.get<Subject>(this.url+'ShowSubject/'+id)
}
//UpdateSubject
update( subject : any){
  return this.http.put(`${this.url}/UpdateSubject`,subject)
}

}
