import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkComponent } from './network/network.component';



@NgModule({
  declarations: [
    NetworkComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NetworkComponent
  ]

})
export class NetworkModule { }
