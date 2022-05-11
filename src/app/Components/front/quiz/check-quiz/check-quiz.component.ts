import { QuestionService } from './../../../../services/question.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from './../../../../Model/question';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from './../../../../services/quiz.service';

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Quiz } from 'src/app/Model/quiz';

@Component({
  selector: 'app-check-quiz',
  templateUrl: './check-quiz.component.html',
  styleUrls: ['./check-quiz.component.css']
})
export class CheckQuizComponent implements OnInit {

  quizForm:FormGroup;
  quiz:Quiz=new Quiz();
  quiz1:Quiz=new Quiz();
  quiz1qsts:Question[]=[];
  qt1:Question=new Question();
  ques:String[];
  qsts:Question[]=[];
  i:number=0;
  quizs:Quiz[]=[];
  nbrQ:number=2;
  compt:number;
  q:Question=new Question();

  constructor(private _service : QuizService, private serviceQuestion :QuestionService, private router:Router, private rout: ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.createForm();
    this.cursor(30);
    //console.log(this.quiz.questions[0].time);
    
this.nbrQ=2;
  
    this.compt=10;
   
    const id = this.rout.snapshot.paramMap.get('id');
    this._service.getQuizById(+id).subscribe(quiz => this.quiz = quiz);
    //this.serviceQuestion.retrieveByQuiz(+id).subscribe(qsts => this.qsts = qsts);

 
//  console.log("taille  "+this.quiz.timing);
 
    const obs = interval(this.quiz.questions[this.i].time * 1000);
    
    obs.subscribe((d) =>{
      
      // this.qsts.push(this.q);
      // console.log(this.q.id);
      // console.log(this.q.writedResponse);
     // console.log(d);
     if(this.i < this.nbrQ ){
       this.compt=0;
        this.i++;
     }
    });
   

    // const c = interval(1000);
    
    // c.subscribe((x) =>{
    //   this.compt=x;
    //   // this.qsts.push(this.q);
    //   // console.log(this.q.id);
    //   // console.log(this.q.writedResponse);
    //  // console.log(d);
     
    // });
  

   
    //this.startCountdown(20);

  }

  startCountdown(seconds) {
    let counter = seconds;
      
    const interval = setInterval(() => {
      console.log(counter);
      if(counter>=0){
        counter--;
      }
     
        
      if (counter < 0 ) {
        
      }
    }, 1000);
  }


  // createForm(){
  //   this.quizForm = this.fb.group({
  //     title: [
  //       ''
  //     ],
  //     timing: [
  //       ''
  //     ],
   
      
  //     questions: this.fb.array([
  //       this.questionsForm()
  //     ])
      
  //   });

  // }
  //   questionsForm(){
  //     return this.fb.group({
  //       question:[''],
  //       op1:[''],
  //       op2:[''],
  //       op3:[''],
  //       op4:[''],

  //       reponses:[''],
  //       timing:['']

  //     })
  //   }




    back(){
      this.router.navigate(['/trainings'])
    }


  detailsQuiz(id:number){
    this._service.getQuizById(id).subscribe(quiz => this.quiz = quiz);
    this.router.navigate(['/-quiz', id]);
    }

    getQuiz(n:number){
      this._service.getQuizById(n).subscribe(quiz => this.quiz = quiz);
      return this.quiz;
    }

    rep(e){
      // this.quiz1.id=this.quiz.id;
      // this.qt1.id=this.quiz.questions[this.i].id;
      // this.qt1.writedResponse=e;

      // // this.quiz1qsts.push(this.qt1);
      // this.quiz1.questions.push(this.qt1);


     this.quiz.questions[this.i].writedResponse=e;

      // this.q.writedResponse=e;
      // this.qsts.push(this.q);
      // this.quiz.questions[this.i].writedResponse=e;
     
// console.log(this.quiz.questions[this.i].id +"|||" +this.quiz.questions[this.i].writedResponse +"\n"+this.quiz.questions[this.i].reponse );
//       console.log(this.i +" : "+this.quiz.questions[this.i].writedResponse);
      if(this.i+1 ==this.nbrQ){
      console.log(" final at "+this.i);
      }
    
    }

    cursor(e){
      this.nbrQ=e;
     
    }


   

 
    valider(){

      this._service.doQuiz(1,this.quiz).subscribe((response)=>{console.log(response)});
      // console.log(this.quiz.questions.length);
      // console.log(this.quiz.title);
      // this.quiz.questions.push(new Question(31,"Au moment de la compilation"),new Question(32,"Au moment de la compilation"),new Question(33,"Au moment de la compilation"),new Question(34,"Au moment de la compilation"),
      // new Question(35,"Au moment de la compilation"),new Question(36,"Au moment de la compilation"),new Question(37,"Au moment de la compilation"),new Question(38,"Au moment de la compilation"),new Question(39,"Au moment de la compilation"),new Question(40,"Au moment de la compilation"));
       
      // this._service.doQuiz(1,this.quiz);
      // console.log(this.quiz.title);
      // console.log(this.quiz.id);
      // console.log(this.quiz.timing);
      // console.log(this.quiz.questions.length);
      // console.log(this.quiz.questions);
    }  

    next(){
      if(this.i<this.nbrQ)
      this.i++;

    }
    

}
