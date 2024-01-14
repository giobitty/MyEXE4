import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { NetworkModule } from './network/network.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ProfileModule,
    NetworkModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
