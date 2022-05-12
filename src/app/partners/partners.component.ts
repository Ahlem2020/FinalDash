import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ClientService } from '../service/client.service';
import { PartnersService } from '../service/partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  partners: any;

  constructor(private ps: PartnersService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllPartners()
  }
  getAllPartners() {
    this.ps.getPartners().subscribe(
      res => {
        this.partners = res
        console.log(res)
      }
    )
  }
  activateDesactivatePartner(u: any, status) {
    this.adminService.activateDesactivatePartner(u.id, status).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    )

    let index = this.partners.indexOf(u);
    u.desactivate = !u.desactivate;
    this.partners[index] = u
    console.log(u)
  }

  deleteUser(idp: any) {
    this.ps.deletePartner(idp).subscribe(() => this.getAllPartners())
  }
}
