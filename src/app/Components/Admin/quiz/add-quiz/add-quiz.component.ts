import { RepQuestion } from './../../../../Model/repQuestion';
import { Question } from './../../../../Model/question';
import { GenericGlobalValidator } from './../../../../shared/validators/generic-global.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/Model/quiz';
import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, createPlatform } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, FormControlName, Validators } from '@angular/forms';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit, AfterViewInit  {

  @ViewChildren(FormControlName, { read: ElementRef }) inputElements: ElementRef[];

  nb_prop1:number=2;nb_prop2:number=2;nb_prop3:number=2;nb_prop4:number=2;nb_prop5:number=2;nb_prop6:number=2;
  nb_prop7:number=2;nb_prop8:number=2;nb_prop9:number=2;nb_prop10:number=2;nb_prop11:number=2;nb_prop12:number=2;
  nb_prop13:number=2;nb_prop14:number=2;nb_prop15:number=2;nb_prop16:number=2;nb_prop17:number=2;nb_prop18:number=2;
  nb_prop19:number=2;nb_prop20:number=2;nb_prop21:number=2;nb_prop22:number=2;nb_prop23:number=2;nb_prop24:number=2;
  nb_prop25:number=2;nb_prop26:number=2;nb_prop27:number=2;nb_prop28:number=2;nb_prop29:number=2;nb_prop30:number=2;
  nb_prop31:number=2;nb_prop32:number=2;nb_prop33:number=2;nb_prop34:number=2;nb_prop35:number=2;nb_prop36:number=2;
  nb_prop37:number=2;nb_prop38:number=2;nb_prop39:number=2;nb_prop40:number=2;nb_prop41:number=2;nb_prop42:number=2;
  nb_prop43:number=2;nb_prop44:number=2;nb_prop45:number=2;nb_prop46:number=2;nb_prop47:number=2;nb_prop48:number=2;
  nb_prop49:number=2;nb_prop50:number=2;nb_prop51:number=2;nb_prop52:number=2;nb_prop53:number=2;nb_prop54:number=2;
  nb_prop55:number=2;nb_prop56:number=2;nb_prop57:number=2;nb_prop58:number=2;nb_prop59:number=2;nb_prop60:number=2;
  op11:boolean=false;op12:boolean=false;op13:boolean=false;op14:boolean=false;op15:boolean=false;
  op21:boolean=false;op22:boolean=false;op23:boolean=false;op24:boolean=false;op25:boolean=false;
  op31:boolean=false;op32:boolean=false;op33:boolean=false;op34:boolean=false;op35:boolean=false;
  op41:boolean=false;op42:boolean=false;op43:boolean=false;op44:boolean=false;op45:boolean=false;
  op51:boolean=false;op52:boolean=false;op53:boolean=false;op54:boolean=false;op55:boolean=false;
  // op61:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op71:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op81:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op91:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op10:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op111:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op121:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op131:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op141:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op151:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op161:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op171:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op181:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op191:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op201:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op211:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op221:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op231:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op241:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op251:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op261:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op271:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op281:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op291:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op301:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op311:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op321:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op331:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op341:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op351:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op361:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op371:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op381:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op391:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  // op401:boolean=false;op2:boolean=false;op3:boolean=false;op4:boolean=false;op5:boolean=false;
  

  public quizForm: FormGroup;

 
 
  public errorMessage: string;
  public formErrors: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } } = {
    quizName: {
      required: 'Le nom de l\'hôtel est obligatoire.',
      minlength: 'Le nom de l\'hôtel doit comporter au moins trois caractères.',
      maxlength: 'Le nom de l\'hôtel ne peut pas dépasser 50 caractères.'
    },
    price: {
      required: 'le prix de l\'hôtel est obligatoire.',
      pattern: 'Veuillez entrer un nombre svp.'
    },
    rating: {
      range: 'Donnez une note à l\'hôtel entre 1 (le plus bas) et 5 (le plus élevé).'
    }
  };

  quiz:Quiz=new Quiz();
  //question:Question=new Question();
  nb_qst:number=1;
  //reponses:RepQuestion[];
 
  

  private globalGenericValidator: GenericGlobalValidator;
  private isFormSubmitted: boolean;

  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,private fb1: FormBuilder,
    private quizService: QuizService) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.createForm();

    // this.globalGenericValidator = new GenericGlobalValidator(this.validationMessages);
    // this.quiz.questions.forEach(element => {
    //   reponses:this.fb.array([])
      
    // });
   
    // this.route.paramMap.subscribe(params => {
    //   const id = +params.get('id');

     //this.getSelectedHotel(id);
    // })
      
  }


  createForm(){
    this.quizForm = this.fb.group({
      title: [
        ''
      ],
      timing: [
        ''
      ],
   
      
      questions: this.fb.array([
        this.questionsForm()
      ])
      
    });

  }
    questionsForm(){
      return this.fb.group({
        question:[''],
        op1:[''],
        op2:[''],
        op3:[''],
        op4:[''],

        reponses:[''],
        timing:['']

      })
    }

 
  


  public get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  
 

  public addQuestion(): void {
    console.log(this.quizForm.getRawValue);
    //this.questions.push(new FormControl());
  }

  public deleteQuestion(index: number): void {
    this.questions.removeAt(index);
    this.questions.markAsDirty();
  }
  
  public deleteQuiz(): void {

    if (this.quiz.id === 0) {
      this.saveCompleted();
    } else {
      if (confirm(`Voulez-vous réelement supprimer ${this.quiz.title} ?`)) {
        this.quizService.deleteQuiz(this.quiz.id).subscribe({
          next: () => this.saveCompleted(),
          error: (err) => this.errorMessage = err
        });
      }
    }

  }


  public saveCompleted(): void {
    this.quizForm.reset();
    this.router.navigate(['/hotels']);
  }

  add_prop1(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }

  add_prop2(){
    if(this.nb_prop2 <5)
    this.nb_prop2++;
  }

  add_prop3(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop4(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop5(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop6(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop7(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop8(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop9(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop10(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop11(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop12(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop13(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop14(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop15(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop16(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop17(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop18(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop19(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop20(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop21(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop22(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop23(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop24(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop25(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop26(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop27(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop28(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop29(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop30(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop31(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop32(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop33(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }
  add_prop(){
    if(this.nb_prop1 <5)
    this.nb_prop1++;
  }



  add_qst(){
    if(this.nb_qst<60)
    this.nb_qst++;
  }
  
  onSubmit(){
    
    this.saveQuiz();
    this.router.navigate(['/quiz'])  
  }

  saveQuiz(){
    //this.questions.push(this.question1, this.question2, this.question3, this.question4, this.question5, this.question6, this.question7, this.question8, this.question9, this.question10);
    //this.quiz.questions=this.questions;
    
    this.quizService.createData(this.quiz).subscribe(), error=> console.log(error);
    this.ngOnInit();
    
  }

  public hideErrorMessage(): void {
    this.errorMessage = null;
  }


  

}
