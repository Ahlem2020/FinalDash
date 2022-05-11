import { Question } from './../Model/question';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/Model/quiz';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  url: string = 'http://localhost:8083/women/quiz/'
  constructor(private http: HttpClient) { }

  public fetchAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.url + 'retrieve-all-Quizs');
  }

  createData(q: Quiz):Observable<Object> {
    return this.http.post(this.url + 'save', q);
  }

  getQuizById(id:number): Observable<Quiz>{
    return this.http.get<Quiz>(this.url + 'retrieve-by-id/' + id);
  }

  getQuiz(id:number): Observable<Quiz>{
    return this.http.get<Quiz>(this.url + 'retrieve-by-id/' + id);
  }

  updateQuiz(q: Quiz): Observable<Quiz>{
    return this.http.put<Quiz>(this.url + 'update', q);
  }

  deleteQuiz(id:number): Observable<Quiz>{
    return this.http.delete<Quiz>(this.url + 'remove/' + id);
  }

  
  doQuiz(idLearner:number, q:Quiz):Observable<Object> { {
    console.log(q);
    // console.log(idLearner)
    return this.http.post('http://localhost:8083/women/quiz/doQuiz/'+idLearner, q);
  }

  


  }}
