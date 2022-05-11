

import { QuizService } from './../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  form:FormGroup;
  result;
  r:any=0;

  constructor(
    private fb:FormBuilder, 
    private _service:  QuizService
  ) { }

  ngOnInit(): void {
    this.creatForm();
  }

  creatForm(){
    this.form = this.fb.group(
      {
        title: [null, Validators.required],
        timing: [null],
        notes:[null],
        
        questions: this.fb.array([this.questionFrom()])
      }
    );
  }

get title(){
  return this.form.get('title');
}

get notes(){
  return this.form.get('notes');
}




  get questions(){
    return this.form.get("questions") as FormArray;
    }

  questionFrom(){
    return this.fb.group(
      {
        question: [null],
        op1: [null],
        op2: [null],
        op3: [null],
        op4: [null],
        reponse:[null],
        time: [null]
      }
    );
  }

  onSave(){
    this._service.createData(this.form.value).subscribe();
    console.log(this.form.getRawValue())
    this.result = this.form.getRawValue();
  }

  addNewQuestion(){
    this.questions.push(this.questionFrom());
  }

  removeQuestion(i:Required<number>){
    this.questions.removeAt(i);
  }

  upNote(v){
    // this.r+=v;
    // this.form = this.fb.group(
    //   {
       
    //     notes:[this.r]
    //   })
      console.log(v);
  }


  onChange(deviceValue) {
    // if(deviceValue==1)
    // this.r.reponse=this.question1.proposition1;
    console.log(deviceValue);
}
 
}