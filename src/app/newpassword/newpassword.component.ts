import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';
@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  otp=""
  password=""
  constructor(private sessionService:SessionService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }
newpassword(){

}
}
