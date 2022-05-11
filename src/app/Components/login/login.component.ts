import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private authService : AuthService,
              public router: Router) { }

  ngOnInit(): void {
  }

  err:number = 0;

  onLoggedin()
  {
  //   this.authService.login(this.user).subscribe((data)=> {
  //     let jwToken = data.headers.get('Authorization');
  //     this.authService.saveToken(jwToken);
  //     this.router.navigate(['/']);
  //     },(err)=>{ this.err = 1;
  //     });
     
}


}
