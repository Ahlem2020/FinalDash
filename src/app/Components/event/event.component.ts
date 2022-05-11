import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NgToastService } from 'ng-angular-popup';

import { Evenement } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private eventService:EventService ,private fb:FormBuilder,private toast: NgToastService ) { }
  listofevent:Evenement[];
  eventForm:FormGroup;
  show=false;
  smodal=false;
  submitted=false;
  f:any;
  p: number = 1;

  ngOnInit(): void {  

    this.eventService.fetchAll().subscribe(evenement => this.listofevent = evenement);
    
    this.eventForm = this.fb.group({
      description:['',Validators.required],
      domain:['',Validators.required],
      eventDate:['',Validators.required],
    endDate:['',Validators.required]
    })
    
  }
  

  handleSubmit() {
    this.submitted = true;
    if (this.eventForm.invalid) {
      return;
  }
    this.eventService.addevent(this.eventForm.value).subscribe();
    this.toast.success({detail:"SUCCESS",summary:'Event added succesfully',duration:10000});
    window.location.reload();
  }
  showform(){
    this.show= !this.show;
  }
  showmodal()
  {
    this.show=true;
  }
  close()
  {
    this.show=false;
  }

  delete (id:number){
   this.eventService.deleteevenet(id).subscribe();
   this.toast.success({detail:"SUCCESS",summary:'Event deleted succesfully',duration:10000});
  
   window.location.reload();
   
  }

}
