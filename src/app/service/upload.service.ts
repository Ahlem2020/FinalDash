import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

  uploadc(file: File):Observable<HttpEvent<{}>>  {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8083/women/event/upload',data, {
    reportProgress: true,
    responseType: 'text'
    });
    this.http.post<FormData>('http://localhost:8083/women/event/upload',formData);  
    return this.http.request(newRequest);
  }
  /*public upload(formData:any) {
   
    return this.http.post<FormData>('http://localhost:8083/women/event/upload', formData);  
  }*/



}

