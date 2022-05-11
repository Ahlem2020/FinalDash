import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adv } from 'src/app/Model/adv';
import { AdvService } from 'src/app/Service/ad/adv.service';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css']
})
export class NewAdComponent implements OnInit {
  ads : any
  constructor( private service :  AdvService ,  private router: Router  ) { }
  upload : File;

  ngOnInit(): void {
    this.ads   = new Adv();
    
  }
 
  AddAdv() {
    return this.service.add(this.ads,this.upload).subscribe(data=>{console.log(data)})
    this.router.navigate(['/subject']) 


  }
  handleFileInput(files : any) {
    this.upload = files.target.files.item(0);
    console.log(this.upload.name);
  }

}
