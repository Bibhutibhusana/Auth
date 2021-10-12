import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:3000/api"

  constructor(private http:HttpClient,
    private router: Router) { }
  registerUser(user):any{
    return this.http.post(`${this.baseUrl}/register`,user)
  }
  loginUser(user):any{
    return this.http.post(`${this.baseUrl}/login`,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getTocken(){
    return localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
