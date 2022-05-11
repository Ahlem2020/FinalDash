import { DatePipe } from '@angular/common';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Training } from 'src/app/Model/training';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  choixmenu : string  = 'A';
  public dataForm:  FormGroup;
  url: string = 'http://localhost:8083/women/training/'
  constructor(private http: HttpClient) { }

  public fetchAll(): Observable<Training[]> {
    console.log("kkkkk"+this.http.get<Training[]>(this.url + 'retrieve-all-training'));
    return this.http.get<Training[]>(this.url + 'retrieve-all-training');

  }

  // createData(t: Training):Observable<Object> {
  //   return this.http.post(this.url + 'save', t);
  // }

   
  updateData(formData: FormData): Observable<any> {
    return this.http.put(this.url +'updateTraining', formData);
  }


  createData(formData: FormData): Observable<any> {
    return this.http.post(this.url +'savee', formData);
  }


  getTrainingById(id:number): Observable<Training>{
    return this.http.get<Training>(this.url + 'retrieveById/' + id);
  }

  updateTraining(t: Training): Observable<Training>{
    return this.http.put<Training>(this.url + 'change', t);
  }

  // addFile(id:number): Observable<Training>{
  //   return this.http.put<Training>(this.url + 'change', id);
  // }

  deleteTraining(id:number): Observable<Training>{
    return this.http.delete<Training>(this.url + 'delete/' + id);
  }

  participate(u:User, t:number){
    return this.http.post('http://localhost:8083/women/training/participe/'+t,u );
  }


  // search(idUser:number, txt: String): Observable<Training[]> {
  //   return this.http.get<Training[]>(this.url + 'searchTraining/'+idUser+'/'+txt);
  // }



  public upload(formData) {
    console.log("upload service function is called")
    console.log(formData)
    return this.http.post<FormData>(this.url, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }

  saveT(formData: FormData): Observable<any>{
    return this.http.post(this.url+'saveT', formData);
  }


  updateTest(data){
    console.log(data);
    return this.http.put<Training>('http://localhost:8083/women/training/addFile/', data);
  }


  // add(pub: Training, file: File ) {
  //   var datePipe = new DatePipe('en-US');
  //   let formdata = new FormData();
  //   formdata.append('subject', pub.subject.toString());
  //   formdata.append('domain', pub.domain.toString());
  //   formdata.append('dateDeb', datePipe.transform(pub.startDate, 'dd.MM.yyyy'));
  //   formdata.append('dateFin',  datePipe.transform(pub.endDate, 'dd.MM.yyyy'));
  //   formdata.append('description', pub.description);
  //   formdata.append('nbreMax', pub.nbreMax);
  //   formdata.append('isCertified', pub.isCertified);
  //   formdata.append('trainerName', pub.trainerName);
  //   formdata.append('level', pub.level.toString());
  //   // formdata.append('nbVueCible', pub.nbInitTarget);
  //   // formdata.append('nbFinalViews',pub.nbFinalViews);
  //   formdata.append('upload', file);
  //  // this.http = new HttpHeaders({Authorization: 'Bearer ' + JSON.parse(<string>localStorage.getItem('token'))});
  //   return this.http.post(this.url + 'testFile', formdata, {
     
  //   });
  // }

  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }

}
