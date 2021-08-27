import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { HourlyDetail } from './../../app.model';
@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss'],
})
export class WeatherTodayComponent implements OnInit {
  @ViewChild('test') test!: ElementRef<HTMLDivElement>;
  constructor( private cityService:CityService) {}
  
  

  @Input()hours: HourlyDetail[] = [];
  @Input()color!:string
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
