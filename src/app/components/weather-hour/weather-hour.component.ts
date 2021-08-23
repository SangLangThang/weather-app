import { Component, Input, OnInit } from '@angular/core';
import { ic_sun } from '../../app.contants';
import { WeatherHour } from 'src/app/app.model';
@Component({
  selector: 'app-weather-hour',
  templateUrl: './weather-hour.component.html',
  styleUrls: ['./weather-hour.component.scss'],
})
export class WeatherHourComponent implements OnInit {
  ic_sun = ic_sun;
  @Input() hour!: WeatherHour;
  constructor() {}

  ngOnInit(): void {}
}
