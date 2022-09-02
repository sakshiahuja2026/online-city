// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { SessionService } from '../session.service';
// import { AbstractControl, FormControl, FormGroup, FormsModule, ValidationErrors, Validators } from '@angular/forms';
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {

//   signupFrom: FormGroup
//   sessionservice: any;
//   signupForm: any;
//   toastr: any;
//   router: any;

//   constructor(){
//     this.signupFrom = new FormGroup({
//       firstName: new FormControl('', Validators.required),
//       lastName: new FormControl('', Validators.required),
//       Dob: new FormControl('', Validators.required),
//     email: new FormControl('', Validators.required),
//     gender: new FormControl('', Validators.required),
//   phone:new FormControl('', Validators.required),
//   pincode:new FormControl('', Validators.required),
//   password: new FormControl('', Validators.required)
//   })
// }
// ngOnInit(): void {
// }

// signup() {

//   this,this.sessionservice.signupApi(this.signupForm.value).subscribe(res=>{
//     if(res){
//       this.toastr.success("signup","",{timeOut:3000});
//       this.router.navigateByUrl("/login");
//     }
//   },err=>{
//     this.toastr.error("Please enter proper details.")
//   })
//   }
  
// }
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  signupForm: FormGroup
  constructor(private toastr:ToastrService, private router:Router, private sessionService:SessionService) {
    this.signupForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      Dob: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required])
      
    })
   }
 
  ngOnInit(): void {
  }
 
  signup(){
    console.log(this.signupForm.value);
    this,this.sessionService.signupApi(this.signupForm.value).subscribe(res=>{
      if(res){
        this.toastr.success("signup","",{timeOut:3000});
        this.router.navigateByUrl("/login");
      }
    },err=>{
      this.toastr.error("Please enter proper details.")
    })
  }
 
}

  