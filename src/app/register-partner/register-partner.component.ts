import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partner } from '../models/partner';
import { User } from '../models/user';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-register-partner',
  templateUrl: './register-partner.component.html',
  styleUrls: ['./register-partner.component.css']
})
export class RegisterPartnerComponent implements OnInit {

  partner: Partner = new Partner();
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

  }
  addUser() {
    console.log(this.partner)
    this.authenticationService.registerPartner(this.partner).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['login-partner']);
      }
    )
  }

}
