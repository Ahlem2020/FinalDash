import { Condidacy } from 'src/app/Model/condidacy';
import { CondidacyService } from 'src/app/services/condidacy.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-show-all-condid',
  templateUrl: './show-all-condid.component.html',
  styleUrls: ['./show-all-condid.component.css']
})
export class ShowAllCondidComponent implements OnInit {

  constructor(private condidacyService:CondidacyService ,private fb: FormBuilder) { }
 listOfCondidacy:Condidacy[];
 condidacyForm:FormGroup;
 show = false;
 searchText:any;
  ngOnInit(): void {
  
   this.condidacyService.fetchAll().subscribe(Condidacy=>this.listOfCondidacy=Condidacy);

   this.condidacyForm = this.fb.group({
    created_at: [''],
    state: [''],
    type: [''],
    module: ['']
  
  });
  }
  handelSubmit() {
    this.condidacyService.addCondidacy(this.condidacyForm.value).subscribe();
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

  showModule(){
    this.condidacyService.showModule(1);
  }

}