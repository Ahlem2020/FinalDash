import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class JobofferModule { 
  idJOffer : number;
  poste : string;
  description : string;
  place : string;
  salary : number;  
   created_at : Date;
   validate_at : Date;
   update_at : Date;
   file : File;

}
