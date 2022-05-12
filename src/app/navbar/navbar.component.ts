import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth : AuthenticationService) { }
  user:any
  loggedIn:any

  ngOnInit(): void {
      this.user= JSON.parse(localStorage.getItem('user'));
      this.loggedIn= JSON.parse(localStorage.getItem('loggedIn'));
  }
  isUserLoggedIn(){
    return this.auth.isUserLoggedIn();
  }
  isAdmin(){
    return this.loggedIn==="admin"
  }
  isPartner(){
    return this.loggedIn==="partner"
  }
  isUser(){
    return this.loggedIn==="user"
  }
  logout(){
    this.auth.logout();
  }

}
