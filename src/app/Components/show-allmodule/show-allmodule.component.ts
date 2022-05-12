import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Module } from 'src/app/Model/Module';

import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-show-allmodule',
  templateUrl: './show-allmodule.component.html',
  styleUrls: ['./show-allmodule.component.css']
})
export class ShowAllmoduleComponent implements OnInit {

  constructor(private condidacyService:ModuleService ,private fb: FormBuilder) { }
 listOfCondidacy:Module[];
 module= new Module(); 
 moduleForm: FormGroup;
 c:any;
 show = false;
 searchText:any;
 
  ngOnInit(): void {
  
   this.condidacyService.fetchAll().subscribe(Module=>this.listOfCondidacy=Module);
   
   this.moduleForm = this.fb.group({
    capacity: [''],
    nbreInscription: [''],
    traitement: [''],
    name: [''],
  });

  
  }
  handelSubmit() {
    
    this.condidacyService.addModule(this.moduleForm.value,1).subscribe();
    this.ngOnInit();
    window.location.reload();
  }

  showAddTodo() {
    this.show = !this.show;
  }

  delete(id: number) {
    this.condidacyService.delete(id).subscribe();
    this.ngOnInit();
  }

  

}
