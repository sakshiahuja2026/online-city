import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
 constructor(private http:HttpClient){}
  

 signupApi(user:any):Observable<any>{
  return this.http.post("http://localhost:9999/public/signup", user)
 }

 loginApi(user:any):Observable<any>{
  return this.http.post("http://localhost:9999/public/login", user)
 }

 spsignupApi(user:any):Observable<any>{
  return this.http.post("http://localhost:9999/signupserviceprovider", user)
 }
 sploginApi(user:any):Observable<any>{
  return this.http.post("http://localhost:9999/loginserviceprovider", user)
 }
 emailsend(email:any):Observable<any>{
  return this.http.post(environment.url+"public/otpsend",email)
}
checkotp(otpbean:any):Observable<any>{
  return this.http.post(environment.url+"public/otp",otpbean)
}
resetpassword(passwordbean:any):Observable<any>{
  return this.http.post(environment.url+"public/forgot",passwordbean)
}
}
