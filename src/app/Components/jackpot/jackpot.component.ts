import { Component, OnInit } from '@angular/core';
import { Jackpot } from 'src/app/model/jackpot';
import { JackpotService } from 'src/app/service/jackpot.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.css']
})
export class JackpotComponent implements OnInit {

  constructor(private jackpotservice:JackpotService,private fb:FormBuilder,private toast: NgToastService) { }
  listofjackpots:Jackpot[];
  jackpotForm:FormGroup;

  p: number = 1;
  show=false;
  ngOnInit(): void {

    this.jackpotservice.fetchALL().subscribe(jackpot => this.listofjackpots = jackpot);
    this.jackpotForm= this.fb.group({
      amountgoal:['',Validators.required],
      goal:['',Validators.required],
      designation:['',Validators.required],
     
    })
  }

  delete(id:number)
  {if(window.confirm('Are sure you want to delete this item ?'))
  {
    this.jackpotservice.deletejackpot(id).subscribe();
    this.toast.success({detail:"SUCCESS",summary:'Jackpot deleted succesfully',duration:10000});
    this.ngOnInit();
  window.location.reload();}
  }

  showmodal()
  {
    this.show=true;
  }
  close()
  {
    this.show=false;
  }
  handleSubmit() {
    this.jackpotservice.adddjackpot(this.jackpotForm.value).subscribe();
    this.toast.success({detail:"SUCCESS",summary:'Jackpot added succesfuly',duration:10000});
    this.ngOnInit();
    window.location.reload();
  }
  att(id:number)
  {
    if(this.jackpotservice.attribuatejack(id).subscribe())
    {
      this.toast.success({detail:"SUCCESS",summary:'Jackpot attibuated succesfully',duration:10000});
      this.jackpotservice.deletejackpot(id).subscribe();
    
      window.location.reload();
    }
  }
}
