
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn:any;
  title = 'ngApp';
  constructor(private router: Router,
    public _authService: AuthService
    ){}
  ngOnInit(){
    this.isLoggedIn = localStorage.getItem('token');

  }


}
