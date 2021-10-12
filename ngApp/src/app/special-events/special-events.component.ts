import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = []
  constructor(private special: EventService,
    private router: Router) { }

  ngOnInit(): void {
    this.special.getSpecialEvents()
    .subscribe(
      res =>{
        this.specialEvents = res;
       console.log(res)},
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this.router.navigate(['/login'])
          }
          else if(err.status === 500){
            this.router.navigate(['/login'])
          }
        }
      }
    )
  }

}
