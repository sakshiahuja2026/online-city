import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from "primeng/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SpspComponent } from './spsp/spsp.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent, 
    SignupComponent, 
    HomeComponent, 
    DashboardComponent,
    ListUsersComponent,
    SpspComponent,
    ForgotpasswordComponent,
    NewpasswordComponent,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
