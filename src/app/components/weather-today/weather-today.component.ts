import { WeatherHour } from './../../app.model';
import { Component, OnInit } from '@angular/core';
import { ic_sun } from 'src/app/app.contants';
@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss'],
})
export class WeatherTodayComponent implements OnInit {
  constructor() {}
  hours: WeatherHour[] = [
    {
      current: false,
      time: 17,
      temp: 17,
      icon: ic_sun,
    },
    {
      current: false,
      time: 18,
      temp: 17,
      icon: ic_sun,
    },
    {
      current: false,
      time: 19,
      temp: 17,
      icon: ic_sun,
    },
    {
      current: false,
      time: 188,
      temp: 17,
      icon: ic_sun,
    },
    {
      current: false,
      time: 1777,
      temp: 17,
      icon: ic_sun,
    },
    {
      current: false,
      time: 122347,
      temp: 17,
      icon: ic_sun,
    },
    {
      current: false,
      time: 1234327,
      temp: 17,
      icon: ic_sun,
    },
  ];
  ngOnInit(): void {}
  onSwipe(evt: any) {
    console.log(evt);
  }
}
