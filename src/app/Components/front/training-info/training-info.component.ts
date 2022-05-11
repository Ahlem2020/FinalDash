import { User } from './../../../Model/user';
import { Training } from './../../../Model/training';
import { TrainingService } from './../../../services/training.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-training-info',
  templateUrl: './training-info.component.html',
  styleUrls: ['./training-info.component.css']
})
export class TrainingInfoComponent implements OnInit {

  training:Training;
  participated:boolean=false;
  user:User=new User();
  token:any="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaG1lZGhhanNhaWRAZ21haWwuY29tIiwiaWF0IjoxNjUxNTQzMDE1LCJleHAiOjE2NTE2Mjk0MTV9.2Ff0lOzLo3a6D9M7Ks8um5EzkjhF5-JekVVDcJ-3rZ5q2giiwsHOpYWbSoEuUpME7uhmBwIafqSqBi_IItD9Dw";
  
  
  constructor(private _service: TrainingService, private router:Router, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    this._service.getTrainingById(+id).subscribe(training => this.training = training);
    

   
  }

  chekParicipation(){
    this.user.id=1;
    if(this.training.learners.includes(this.user))
    this.participated=true;
  }

  participate(){
   
    this._service.participate(this.user, this.training.id);
  }

  checkQuiz(id:number){
    this.router.navigate(['/-quiz', id]);
  }

}
