import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {FullCalendarModule} from "@fullcalendar/angular";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>
      <h1>Demo App</h1>
      <full-calendar [options] = "calendarOptions"></full-calendar>
    </div>
  `,
  imports: [
    FullCalendarModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };


}
