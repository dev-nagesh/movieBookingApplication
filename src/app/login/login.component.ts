import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  flashWrong=false;
  constructor(private fb:FormBuilder,private apiService:ApiService,private router:Router) {
    
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  login(){
    console.log(this.loginForm);
    this.apiService.validateLogin(this.loginForm.value).subscribe(response=>{
      if(response && response.login ==true){
        localStorage.setItem('isLoggedin',JSON.stringify(this.loginForm.value.username));
        this.router.navigate(['/ticketBooking']);
      }
      else{
        this.flashWrong=true;
        setTimeout(()=>{
          this.flashWrong=false;
        },2000)
      }
    })

  }
}
