import {NgModule} from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {FullCalendarModule} from "@fullcalendar/angular";
import {BrowserModule} from "@angular/platform-browser";
import {MenuComponent} from "./menu/menu.component";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BrowserModule,
    FullCalendarModule,
    MenuComponent,
    // register FullCalendar with your app
  ],
  providers: [
  ],

  exports: []
})
export class AppModule { }
