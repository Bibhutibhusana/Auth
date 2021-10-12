import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = "http://localhost:3000/api"
  constructor(private http: HttpClient) { }
  getEvents():any{
    return this.http.get(`${this.baseUrl}/events`)
  }
  getSpecialEvents():any{
    return this.http.get(`${this.baseUrl}/special`)
  }
}
