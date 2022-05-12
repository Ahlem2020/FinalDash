import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  user: any;

  constructor(private clientServ: ClientService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers() {
    this.clientServ.getusers().subscribe(
      res => {
        this.user = res
        console.log(res)
      }
    )
  }
  activateDesactivateUser(u: any, status) {
    this.adminService.activateDesactivateUser(u.id, status).subscribe(
      res => {
        console.log(res)
        this.getAllUsers();
      }, err => {
        console.log(err)
      }
    )

    let index = this.user.indexOf(u);
    u.desactivate = !u.desactivate;
    this.user[index] = u
    console.log(u)
  }

  deleteUser(idp: any) {
    this.clientServ.deleteUser(idp).subscribe(() => this.getAllUsers())
  }
}
