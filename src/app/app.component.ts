import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mat-datepicker-demo';


  dateChanged($event: { target: { value: any; }; }){
    console.log($event.target.value)
  }
}
