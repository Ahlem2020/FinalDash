import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobofferModule } from 'src/app/Model/joboffer/joboffer.module';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  listOfJobOffers : JobofferModule[];
  jobOfferForm : FormGroup;
  show = false;
  constructor(private httpService:HttpService , private fb :FormBuilder  ) { }

  ngOnInit(): void {
    this.httpService.fetchAll().subscribe(jobOffer =>this.listOfJobOffers =jobOffer);
   this.jobOfferForm=this.fb.group(
     {
       poste : [''],
      description : [''],
      place : [''],
      salary : [''], 
       created_at : [''],
       validate_at : [''],
       update_at :[''],
       file : [''],
      }
   )
  }
  
  deleteJobOffer(idJOffer:number){
    this.httpService.deleteJobOffer(idJOffer).subscribe();
    this.ngOnInit(); 
   }
   showAddJobOffer(){
    this.show = !this;
  }
handelSubmit(){
  this.httpService.addJobOffer(this.jobOfferForm.value).subscribe();
  this.ngOnInit();
}
addJobOffer(){
  this.httpService.addJobOffer(this.jobOfferForm.value).subscribe();
  this.ngOnInit();
}

UpdateJobOffer(){
  this.httpService.UpdateJobOffer(this.jobOfferForm.value).subscribe();
  this.ngOnInit();
}
}