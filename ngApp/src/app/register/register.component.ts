import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    'email':'',
    'password':''
  }
  constructor(private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.authService.registerUser(this.registerUserData)
    .subscribe(
      data =>{
        console.log(data)
        localStorage.setItem('token',data.token)
        this.router.navigate(['/special'])
      } ,
      err => console.log(err)
    )
    console.log(this.registerUserData)
  }
}
