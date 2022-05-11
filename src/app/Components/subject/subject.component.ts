import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'src/app/Model/Subject';
import { SubjectService } from 'src/app/Service/subject.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
 
             
 
})
export class SubjectComponent implements OnInit {

  p: number = 1;
  constructor(private Service: SubjectService, private router: Router) {
 

   }
  ListSubject: Subject[];
  subject: Subject
  currentPage : any
  
  ngOnInit(): void {
    this.Service.ShowAll().subscribe(data => this.ListSubject = data);
    window.location.reload;
    //console.log(this.ListSubject);
  }

  deleteSubjectId(id: number) {
    this.Service.delete(id).subscribe(
      () => {
        this.ListSubject.forEach(subject => {
          if (subject.id == id) {
             let i = this.ListSubject.indexOf(subject)
            this.ListSubject.splice(i, 1)
          }
        })
      }
    )
}

    

}
