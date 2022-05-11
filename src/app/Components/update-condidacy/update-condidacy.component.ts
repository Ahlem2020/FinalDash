import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Condidacy } from 'src/app/module/condidacy';
import { CondidacyService } from 'src/app/services/condidacy.service';

@Component({
  selector: 'app-update-condidacy',
  templateUrl: './update-condidacy.component.html',
  styleUrls: ['./update-condidacy.component.css']
})
export class UpdateCondidacyComponent implements OnInit {

  
  todoToBeUpdated: Condidacy;

  updatedForm: FormGroup;

  show: boolean = false;

  constructor(private httpService:CondidacyService, private fb: FormBuilder) { }

  ngOnInit(): void {
   // const id = this.rout.snapshot.paramMap.get('id');
    this.httpService.findById(3).subscribe(module => this.todoToBeUpdated = module);
    
    
    this.updatedForm = this.fb.group({
      created_at: [''],
      state: [''],
      type: [''],
      
    });

  this.update();
  }



  handelSubmitUpdate() {
    this.httpService.update(3, this.updatedForm.value).subscribe();
   
  }



  update() {
    this.updatedForm.setValue({
      capacity: this.todoToBeUpdated.created_at,
      nbreInscription: this.todoToBeUpdated.state,
      traitement: this.todoToBeUpdated.type,
      name: this.todoToBeUpdated.module,
    });
   
  

  }

}
