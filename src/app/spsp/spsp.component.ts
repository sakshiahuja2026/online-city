import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-spsp',
  templateUrl: './spsp.component.html',
  styleUrls: ['./spsp.component.css']
})
export class SpspComponent {
  firstName: string = ""
  lastName: string = ""
  Dob=""
  gender:string=""
  email = ""// auto - string 
  phone=""
  password: string = ""
  pincode=""
  imgUrl:string=""
  idProof:string=""
  service:string=""
  isActive:string=""


  constructor(private tsService: ToastrService, private router: Router, private sessionService: SessionService) {
  }


  spsp() {
    console.log(this.firstName)
    console.log(this.lastName)
    console.log(this.email);
    console.log(this.password);
    console.log(this.imgUrl)
    //validate 
    let user = {
      "firstName": this.firstName,
      "lastName":this.lastName,
      "Dob":this.Dob,
      "gender":this.gender,
      "email": this.email,
      "phone":this.phone,
      "password": this.password,
      "pincode":this.pincode,
      "imgUrl":this.imgUrl,
      "idProof":this.idProof,
      "service":this.service,
      "isActive":this.isActive
      
    }
    this.sessionService.spsignupApi(user).subscribe(success => {
      if (success) {
        this.tsService.success("SPSP", "", { timeOut: 3000 });
        this.router.navigateByUrl("/login")
      }
    }, err => {

    })
    //

    //url 
    //logic
  }
}