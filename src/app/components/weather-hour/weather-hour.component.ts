import { Component, Input, OnInit } from '@angular/core';
import { WeatherHour } from 'src/app/app.model';
@Component({
  selector: 'app-weather-hour',
  templateUrl: './weather-hour.component.html',
  styleUrls: ['./weather-hour.component.scss'],
})
export class WeatherHourComponent implements OnInit {
  @Input() hour!: WeatherHour;
  constructor() {}

  ngOnInit(): void {

  }
}
