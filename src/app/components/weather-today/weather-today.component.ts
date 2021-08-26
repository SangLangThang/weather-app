import { WeatherHour } from './../../app.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss'],
})
export class WeatherTodayComponent implements OnInit {
  @ViewChild('test') test!: ElementRef<HTMLDivElement>;
  constructor( private cityService:CityService) {}
  
  

  hours: WeatherHour[] = [];
  step = 88;
  position = 0;

  onSwipe(ev: any) {
    let carousel = document.querySelector('.weather-hours-lists');
    if (ev.type === 'swipeleft' /* && this.position > -264 */ ) {
      this.position -= this.step;
      this.test.nativeElement.style.left = `${this.position}px`;
    }
    if (ev.type === 'swiperight' && this.position < 0) {
      this.position += this.step;
      this.test.nativeElement.style.left = `${this.position}px`;
    }
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    
  }
}
