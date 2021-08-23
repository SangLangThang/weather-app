import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  timestamp=1629568800*1000;
  /* {{timestamp | date:'EEEE, MMMM d'}} */
  constructor() {
    
  }
  
 
}
