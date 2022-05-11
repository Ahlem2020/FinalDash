import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/Model/Subject';
import { SubjectService } from 'src/app/Service/subject.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 Subject : any 
imageSubject : File;
  constructor(   private Service: SubjectService , private router: Router ) { }

  ngOnInit(): void {
  
    this.Subject=new Subject();
     imageSubject : File;
  }
 public addSubject(){
    this.Service.add(this.Subject,this.imageSubject).subscribe(data => {console.log(data)})
    this.router.navigate(['/subject']) 

 
 

  }

  public goToList(){
 
  }
  handleFileInput(files : any) {
    this.imageSubject = files.target.files.item(0);
    console.log(this.imageSubject.name);
  }

}
