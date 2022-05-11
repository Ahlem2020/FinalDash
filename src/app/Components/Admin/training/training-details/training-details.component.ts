import { TrainingService } from './../../../../services/training.service';
import { Training } from 'src/app/Model/training';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {
  
  id: number;
  training:Training = new Training();
  constructor(private trainingService: TrainingService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params['id'];
    this.trainingService.getTrainingById(this.id).subscribe(data=>{
      this.training = data;
       
    })
  }
}
