import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/Model/Subject';
import { SubjectService } from 'src/app/Service/subject.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form : boolean = false;

  updatedSubject: Subject;
  id : number
  subject !:Subject;
  ListSubject: any;
  closeResult! : string;

    constructor(   private Service: SubjectService ,  private modalService: NgbModal) { }
  
    ngOnInit(): void {
      this.getAllSubjects();

      this.subject={
        name : null,
        description : null,
        nbLike : null,
        nbDislike : null,
        nbVue : null,
        domaine : null,
        id : null,
        imageSubject : null




}
    }
    update(subject: Subject){
      return this.Service.update(subject).subscribe();

    }
    getAllSubjects(){
      return this.Service.ShowAll().subscribe(res => this.ListSubject = res)
    }
    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      }
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }
      closeForm(){
    
      }
      cancel(){
        this.form = false;
      }
    
  }  
