import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobofferModule } from '../model/joboffer/joboffer.module';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string='http://localhost:8083/women/JobOffer/'
  constructor(private http:HttpClient  ) { }
  public fetchAll():Observable<JobofferModule[]>{
    return this.http.get<JobofferModule[]>(this.url+ 'AllJobsOffer');
}
public addJobOffer (jobOffer:JobofferModule){

  return this.http.post<JobofferModule>(this.url+'addJob',jobOffer);
}

public deleteJobOffer (idJOffer:number){

  return this.http.delete<JobofferModule>(this.url+'JobOffer/delete/'+idJOffer);
}

public UpdateJobOffer (jobOffer:JobofferModule ){

  return this.http.put<JobofferModule>(this.url+'JobOffer/updateJob',jobOffer);
  
}
}
