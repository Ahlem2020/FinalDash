import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etat } from '../models/etat';
import { LoginDetails } from '../models/login-details';
import { Meeting } from '../models/meeting';
import { MeetingService } from '../service/meeting.service';

@Component({
  selector: 'app-meet-requests',
  templateUrl: './meet-requests.component.html',
  styleUrls: ['./meet-requests.component.css']
})
export class MeetRequestsComponent implements OnInit {

  constructor(private ms: MeetingService, private router : Router) { }

  meetings: Meeting[] = []
  loginDetails : LoginDetails= new LoginDetails();
  async ngOnInit(): Promise<void> {
    this.loginDetails= await JSON.parse(localStorage.getItem('loginDetails'))
    console.log(this.loginDetails)
    this.retrieveMeetingsByPartner(this.loginDetails.id);
  }

  retrieveMeetingsByPartner(id: any) {
    this.ms.getmeetingbypartner(id).subscribe(
      res => {
        this.meetings = res;
        console.log(res);
      }, err => {
        console.log(err)
      }
    )
  }

  validate(id,v:any){
    this.ms.validateMeeting(id,v).subscribe(
      res=>{
        this.retrieveMeetingsByPartner(this.loginDetails.id);
        console.log(res)
        this.router.navigate(["/meetings"])
      },err=>{
        console.log(err)
      }
    )
  }
  action(m:Meeting){
    return m.validity =Etat.pending
  }

}
