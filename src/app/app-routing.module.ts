import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SpspComponent } from './spsp/spsp.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  {component:LoginComponent,path:"login"},
  {component:SignupComponent,path:"signup"},
  {component:HomeComponent,path:"home"},
  {component:DashboardComponent,path:"admin"},
  {component:SpspComponent,path:"spsp"},
  {component:ForgotpasswordComponent,path:"forgotpassword"},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
