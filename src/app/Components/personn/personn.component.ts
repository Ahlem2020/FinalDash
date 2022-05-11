import { error } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-personn',
  templateUrl: './personn.component.html',
  styleUrls: ['./personn.component.css']
})
export class PersonnComponent implements OnInit {

 

  constructor(private up:UploadService,private router: Router,private toast: NgToastService) { }
   
  ngOnInit(): void {
  }
 

  hey(event:any)
  {
      this.up.uploadc(event.target.value);
  }

  selectedFiles: FileList;
  selectedFile = null;
  currentFileUpload: File | any;
  progress: { percentage: number } = { percentage: 0 };
  upload() {
    console.log("a");
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
      this.up.uploadc(this.currentFileUpload).subscribe();
console.log(this.currentFileUpload);
this.toast.success({detail:"SUCCESS",summary:'Upload done succefuly',duration:10000});
this.router.navigate(['/dash']);
  }
  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }
}



