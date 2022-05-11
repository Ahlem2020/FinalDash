import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Condidacy } from 'src/app/module/condidacy';


import { CondidacyService } from 'src/app/services/condidacy.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

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