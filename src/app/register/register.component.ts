import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: User = new User();
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.user.sexe = "female"
    this.user.civilState = "single"
  }
  addUser() {
    console.log(this.user)
    this.authenticationService.register(this.user).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['login']);
      }
    )
  }

  SendDataonChange(event: any) {
    this.user.dateOfBirth = event.target.value
    console.log(this.user);

  }
}
