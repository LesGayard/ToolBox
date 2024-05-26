import {NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
// @ts-ignore
import { FlatpickrModule } from 'angularx-flatpickr';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    //NgbModalModule,
    FlatpickrModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
  ],
  bootstrap: []
})
export class AppModule { }
