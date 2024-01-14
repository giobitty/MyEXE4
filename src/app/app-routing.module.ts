import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { NetworkComponent } from './network/network/network.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, title: 'Login component',},
  {path: 'network', component: NetworkComponent, title: 'Network component',},
  {path: 'profile', component: ProfileComponent, title: 'Profile component',},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  title='My Exe 4'
}
