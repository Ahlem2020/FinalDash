import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPassword } from '../models/reset-password';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute,private authService : AuthenticationService, private router: Router) { }

  resetPass : ResetPassword = new ResetPassword();
  ngOnInit(): void {
    this.resetPass.token="";
    this.resetPass.password="";
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.resetPass.token=params['token'];
        console.log(this.resetPass.token); // price
        console.log(params['token']); // price

      }
    );
  }
reset(){
  console.log(this.resetPass)
  this.authService.changePasswordResetUser(this.resetPass).subscribe(
    res=>{
      alert("Password successfully changed")
    },err=>{
      console.log(err)
    }
  )
  
  this.router.navigate(["/select-login"])
}
}
