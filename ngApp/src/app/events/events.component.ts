import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';


// interface event {
//   name: string,
//   description: string,
//   date: Date
// }
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events =[]
  constructor(private event: EventService) { }

  ngOnInit(): void {
    this.event.getEvents()
    .subscribe(
      res => {
        this.events = res
      },
      err => console.log(err)
    )
  }


}
