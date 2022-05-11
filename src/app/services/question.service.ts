import { Observable } from 'rxjs';
import { Question } from './../Model/question';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  url: string = 'http://localhost:8083/women/question/'
  constructor(private http: HttpClient) { }

  public retrieveByQuiz(id: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.url + 'retrieveByQuiz/'+id);
  }

  public all(): Observable<Question[]> {
    return this.http.get<Question[]>('http://localhost:8083/women/question/all');
  }

}
