import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionDetails } from '../models/connection-details';
import { LoginDetails } from '../models/login-details';
import { User } from '../models/user';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  connectionDetails : ConnectionDetails = new ConnectionDetails();
  loginDetails : LoginDetails;
  invalidLogin = false;
  user = new User();
  erreur=0;
  constructor(
    private router :Router,
    private authenticationService : AuthenticationService,
  ) { }

  ngOnInit(): void {
    localStorage.setItem('token', '');
    localStorage.setItem('loginDetails', '');
    localStorage.setItem('user', '');
  }

  LogIn() {
    console.log("loggin in ..")
    console.log(this.connectionDetails);
    this.authenticationService.authenticate(this.connectionDetails).subscribe(
      res => {
        console.log("here")
        console.log(res)
        this.loginDetails = res;
        localStorage.setItem('loginDetails', JSON.stringify(this.loginDetails));
        localStorage.setItem('token', this.loginDetails.tokenType+" "+this.loginDetails.accessToken);
        this.invalidLogin= false;
        this.authenticationService.getUserByEmail(this.loginDetails.email).subscribe(
          res=>{
            this.user = res ;
            localStorage.setItem('user',JSON.stringify(this.user));
            localStorage.setItem('loggedIn', 'user');
          }
        )
        this.router.navigate(['meetings']);
        
      },error=>{
        this.invalidLogin=true;  
        console.log(error);
        this.erreur=1;

      })
    }

    forgotPassword(){

      console.log(this.connectionDetails.email)
      if(this.connectionDetails.email.length==0){
        alert("Please enter your email")
      }
      this.authenticationService.resetPasswordUser(this.connectionDetails).subscribe(
        res =>{
          alert("Check your email for the password reset link")
        },err=>{
          alert("Check your email for the password reset link")
        }
      )
      
    }
    
}
