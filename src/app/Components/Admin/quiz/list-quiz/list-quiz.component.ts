import { Question } from './../../../../Model/question';
import { Router } from '@angular/router';
import { QuizService } from './../../../../services/quiz.service';
import { Quiz } from 'src/app/Model/quiz';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {

  quizs:Quiz[] = [];
  quiz: Quiz = new Quiz();;
  search_Text:any;
  p: number = 1 ;

  question1:Question = new Question();
  question2:Question = new Question();
  question3:Question = new Question();
  question4:Question = new Question();
  question5:Question = new Question();
  question6:Question = new Question();
  question7:Question = new Question();
  question8:Question = new Question();
  question9:Question = new Question();
  question10:Question = new Question();
  questions:Question[]=[]
  Quiz: Quiz = new Quiz();

  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  show7 = false;
  show8 = false;
  show9 = false;
  show10 = false;
  showF1 = true;
  showF2 = false;
  showF3 = false;
  showF4 = false;
  showF5 = false;
  showF6 = false;
  showF7 = false;
  showF8 = false;
  showF9 = false;
  showF10 = false;

  show_quiz:boolean=false;
 

  show_form_new:boolean=false;
  list:boolean=true;
  detail:boolean=false;
  Update_form=false;
  constructor(private _service:QuizService, private router:Router) { }

  ngOnInit(): void {
    // this._service.fetchAll().subscribe((response) => {this.quizs = response;
    // });
    this.getQuizs();
  }

  private getQuizs(){
    this._service.fetchAll().subscribe(quiz => this.quizs = quiz);
  }

  updateQuiz(id:number){
    this.router.navigate(['/update-quiz', id]);
  }

  deleteQuiz(id:number){
    this._service.deleteQuiz(id).subscribe(data =>{
      console.log(data);
      this.getQuizs();
    });    
  }

  // detailsQuiz(id:number){
  //    this.router.navigate(['/details-quiz', id]);
  // }

  detailsQuiz(q:Quiz){
    this.quiz=q;
    this.show_quiz_todo();
 }

  search(){
    if(this.search_Text==""){
      this.ngOnInit();
    }
    else{
      this.quizs=this.quizs.filter(res=>{ return res.title.toLocaleLowerCase().match(this.search_Text.toLocaleLowerCase())
      });      
    }      
  }

  key: String = 'id';
  reverse: boolean = false;

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  clickMethod(name: number) {
    if(confirm("Are you sure to delete "+name)) {
      this.deleteQuiz(name);
    }
  }

  onSubmit(){
    
    this.saveQuiz();
    this.router.navigate(['/quiz'])  
  }

  saveQuiz(){
    this.questions.push(this.question1, this.question2, this.question3, this.question4, this.question5, this.question6, this.question7, this.question8, this.question9, this.question10);
    this.quiz.questions=this.questions;
    this._service.createData(this.quiz).subscribe(), error=> console.log(error);
    this.ngOnInit();
    
  }

  show_datail(){
    this.show_form_new=false;
    this.list=false;
    this.Update_form=false;
    this.detail = true;

    
  }

  show_new(){
    
    
    this.quiz=new Quiz();
    this.list=false;
    this.detail = false;
    this.show_form_new=true;
  }

  show_list(){
    window.location.reload();
    this.show_form_new=false;
    this.detail = false;
    this.Update_form=false;
    this.list=true;
  }

  show_update_form(){
    this.show_form_new=false;
    this.detail = false;
    this.list=false;
    this.Update_form=true;
  }

  show_quiz_todo(){
    this.show_quiz=!this.show_quiz;
  }

  showQ1(){
    this.show1 = !this.show1;
    this.changePosition('enlarge');
    //this.toggle();
  }

  showQ2(){
    this.show2 = !this.show2;
  }

  showQ3(){
    this.show3 = !this.show3;
  }

  showQ4(){
    this.show4 = !this.show4;
  }

  showQ5(){
    this.show5 = !this.show5;
  }

  showQ6(){
    this.show6 = !this.show6;
  }

  showQ7(){
    this.show7 = !this.show7;
  }

  showQ8(){
    this.show8 = !this.show8;
  }

  showQ9(){
    this.show9 = !this.show9;
  }

  showQ10(){
    this.show10 = !this.show10;
  }

  showFQ1(){
    this.showF1 = true;
    this.showF2 = false;
    this.showF3 = false;
    this.showF4 = false;
    this.showF5 = false;
    this.showF6 = false;
    this.showF7 = false;
    this.showF8 = false;
    this.showF9 = false;
    this.showF10 = false;
    this.changePosition('enlarge');
    //this.toggle();
  }

  showFQ2(){
    this.showF1 = false;
    this.showF2 = true;
    this.showF3 = false;
    this.showF4 = false;
    this.showF5 = false;
    this.showF6 = false;
    this.showF7 = false;
    this.showF8 = false;
    this.showF9 = false;
    this.showF10 = false;
  }

  showFQ3(){
    this.showF1 = false;
    this.showF2 = false;
    this.showF3 = true;
    this.showF4 = false;
    this.showF5 = false;
    this.showF6 = false;
    this.showF7 = false;
    this.showF8 = false;
    this.showF9 = false;
    this.showF10 = false;
  }

  showFQ4(){
    this.showF1 = false;
    this.showF2 = false;
    this.showF3 = false;
    this.showF4 = true;
    this.showF5 = false;
    this.showF6 = false;
    this.showF7 = false;
    this.showF8 = false;
    this.showF9 = false;
    this.showF10 = false;
  }

  showFQ5(){
    this.showF1 = false;
    this.showF2 = false;
    this.showF3 = false;
    this.showF4 = false;
    this.showF5 = true;
    this.showF6 = false;
    this.showF7 = false;
    this.showF8 = false;
    this.showF9 = false;
    this.showF10 = false;
  }

  showFQ6(){
    this.showF1 = false;
    this.showF2 = false;
    this.showF3 = false;
    this.showF4 = false;
    this.showF5 = false;
    this.showF6 = true;
    this.showF7 = false;
    this.showF8 = false;
    this.showF9 = false;
    this.showF10 = false;
  }

  showFQ7(){
    this.showF1 = false;
    this.showF2 = false;
    this.showF3 = false;
    this.showF4 = false;
    this.showF5 = false;
    this.showF6 = false;
    this.showF7 = true;
    this.showF8 = false;
    this.showF9 = false;
    this.showF10 = false;
  }

  showFQ8(){
    this.showF1 = false;
    this.showF2 = false;
    this.showF3 = false;
    this.showF4 = false;
    this.showF5 = false;
    this.showF6 = false;
    this.showF7 = false;
    this.showF8 = true;
    this.showF9 = false;
    this.showF10 = false;
  }

  showFQ9(){
    this.showF1 = false;
    this.showF2 = false;
    this.showF3 = false;
    this.showF4 = false;
    this.showF5 = false;
    this.showF6 = false;
    this.showF7 = false;
    this.showF8 = false;
    this.showF9 = true;
    this.showF10 = false;
  }

  showFQ10(){
    this.showF1 = false;
    this.showF2 = false;
    this.showF3 = false;
    this.showF4 = false;
    this.showF5 = false;
    this.showF6 = false;
    this.showF7 = false;
    this.showF8 = false;
    this.showF9 = false;
    this.showF10 = true;

  }

  position:String;
  changePosition(newPosition:String){
    this.position=newPosition;
  }

  onChange1(deviceValue) {
    
    // this.question1.reponse=deviceValue;
   
}

onChange2(deviceValue) {

  // this.question2.reponse=deviceValue;
  
}

onChange3(deviceValue) {
  
  // this.question1.reponse=deviceValue;
  
}

onChange4(deviceValue) {
  
  // this.question1.reponse=deviceValue;
  
}

onChange5(deviceValue) {
  // 
  // this.question1.reponse=deviceValue;
  
}

onChange6(deviceValue) {
  
  // this.question1.reponse=deviceValue;
  
}

onChange7(deviceValue) {
  
  // this.question1.reponse=deviceValue;
  
}
onChange8(deviceValue) {
  
  // this.question1.reponse=deviceValue;
  
}onChange9(deviceValue) {
  
  // this.question1.reponse=deviceValue;
  
}onChange10(deviceValue) {
 
  // this.question1.reponse=deviceValue;
  
}


}