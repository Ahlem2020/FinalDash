import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Domain } from './../../../Model/domain';
import { Training } from 'src/app/Model/training';
import { Router } from '@angular/router';
import { TrainingService } from './../../../services/training.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  training:Training;
  sh_cat:boolean=false;
  sh_dur:boolean=false;
  listTrainings: Training[] = [];
  category:Domain;
  search_Text:any;
  domains = [ 'Couture',
    'Coiffure',
    'Cuisine',
    'Informatique',
    'Entreprenariat',
    'Architacture',
    'Marketing',
    'Sante',
    'Economie',
    'Communication',
   'Mecanique'];

  constructor(public  _service:TrainingService, private router:Router) { }

  ngOnInit(): void {
    //this.getTrainings();
    this._service.fetchAll().subscribe((response) => {this.listTrainings = response; });
    console.log("liste:"+this.listTrainings.length);
  }

  show_cat(){
    this.sh_cat=!this.sh_cat;
  }

  sh_duration(){
    this.sh_dur=!this.sh_dur;
  }

//   onItemChange(e){
//     this.category= e.target.value;
//     console.log(this.category);
//  }

private getTrainings(){
  this._service.fetchAll().subscribe(training => this.listTrainings = training);
}

 search(){
  if(this.search_Text== ""){
    this.ngOnInit();
  }
  else{
    //console.log(this.search_Text);
    this.listTrainings=this.listTrainings.filter(res=>{ return res.subject.toLocaleLowerCase().match(this.search_Text.toLocaleLowerCase());
    });      
  }      
}

onItemChange(e){
  this.category= e.target.value;
  //this.getTrainings();
  if(this.category.toString()==""){
    this.ngOnInit();
  }
  else{
    //this.getTrainings();
    console.log(this.category);
    this.listTrainings=this.listTrainings.filter(res=>{ return res.domain==this.category
    });      
  }      
}

showDetails(id:number){
    this.router.navigate(['/info', id]);
  }

 



}
