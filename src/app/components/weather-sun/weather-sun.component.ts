import { Component, OnInit } from '@angular/core';
import { WeatherCircle } from 'src/app/app.model';
import { sunrise,sunset,Sun } from 'src/app/app.contants';
@Component({
  selector: 'app-weather-sun',
  templateUrl: './weather-sun.component.html',
  styleUrls: ['./weather-sun.component.scss'],
})
export class WeatherSunComponent implements OnInit {
  constructor() {}
  sunrise=sunrise;
  sunset=sunset;
  Sun=Sun
  ngOnInit(): void {}
  circle_sunrise: WeatherCircle = {
    width: 150,
    height: 150,
    r: 73,
    stroke_width: 2,

    dash: true,
    stroke_dash: 5,
    stroke_color_dash: 'white',
    stroke_color_fill: '#fcd038',
    stroke_color_path: '#e4e4ee',
    rotate: -180,
    translateY:0,
    offset: 5,
  };
  circle_sunset: WeatherCircle = {
    width: 150,
    height: 150,
    r: 73,
    stroke_width: 2,

    dash: false,
    stroke_dash: 5,
    stroke_color_dash: 'white',
    stroke_color_fill: '#fcd038',
    stroke_color_path: '#e4e4ee',
    rotate: 0,
    translateY:-75,
    offset: 5,
  };
}
