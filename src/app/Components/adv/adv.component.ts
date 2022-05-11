import { Component, OnInit } from '@angular/core';
import { Adv } from 'src/app/Model/adv';
import { AdvService } from 'src/app/Service/ad/adv.service';

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.css']
})
export class AdvComponent implements OnInit {


  constructor( private Service: AdvService) { }
  ListAds: Adv[]
  currentPage : any
  ads : Adv
  ngOnInit(): void {
    this.Service.ShowAllAds().subscribe(data=> this.ListAds=data);
  }

}
