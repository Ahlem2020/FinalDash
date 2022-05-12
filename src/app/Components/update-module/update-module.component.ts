import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/Model/Module';
import { ModuleService } from 'src/app/services/module.service';


@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.css']
})
export class UpdateModuleComponent implements OnInit {

  todoToBeUpdated: Module;

  updatedForm: FormGroup;

  show: boolean = false;

  constructor(private httpService:ModuleService, private fb: FormBuilder) { }

  ngOnInit(): void {
   // const id = this.rout.snapshot.paramMap.get('id');
    this.httpService.findById(1).subscribe(module => this.todoToBeUpdated = module);
    
    
    this.updatedForm = this.fb.group({
    capacity: [''],
    nbreInscription: [''],
    traitement: [''],
    name: [''],
    });

  this.update();
  }



  handelSubmitUpdate() {
    this.httpService.update(1, this.updatedForm.value).subscribe();
   
  }



  update() {
    this.updatedForm.setValue({
      capacity: this.todoToBeUpdated.capacity,
      nbreInscription: this.todoToBeUpdated.nbreInscription,
      traitement: this.todoToBeUpdated.traitement,
      name: this.todoToBeUpdated.name,
    });
   
  

  }

}
