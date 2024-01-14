import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent {
  title = 'Network component'
  
  public urlImages: string = 'https://ugobetori.it/_notes/api-test/angular/angular2_unauth/img/';


  //urlImages: string = 'https://ugobetori.it/_notes/api-test/angular/angular2/img/';
  constructor(public globalService: GlobalService){}
}
