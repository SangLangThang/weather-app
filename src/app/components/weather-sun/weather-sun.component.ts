import { Component, Input, OnInit } from '@angular/core';
import { WeatherCircle } from 'src/app/app.model';
import { sunrise, sunset, clearSkyD, clearSkyN } from 'src/app/app.contants';
@Component({
  selector: 'app-weather-sun',
  templateUrl: './weather-sun.component.html',
  styleUrls: ['./weather-sun.component.scss'],
})
export class WeatherSunComponent implements OnInit {
  constructor() {}
  sunrise = sunrise;
  sunset = sunset;
  Sun = clearSkyD;
  @Input() sun!: any;
  rotate = 0;
  classRotate = `transform: rotate(${this.rotate}deg);`;

  current_time_percent = () => {
    let a = this.sun.sunrise_time;
    let b = this.sun.sunset_time;
    let c = this.sun.current_time;
    if (c < b) {
      this.circle_sunrise.percent = ((c - a) / (b - a)) * 100;
      this.circle_sunset.percent = 0;
      this.rotate = (this.circle_sunrise.percent * 180) / 100;
      this.classRotate = `transform: rotate(${this.rotate}deg);`;
      return true;
    } else {
      this.Sun = clearSkyN;
      this.circle_sunset.percent = ((c - b) / (b - a)) * 100 ;
      this.circle_sunrise.percent = 0;
      this.rotate = (this.circle_sunset.percent * 180) / 100 +180;
      this.classRotate = `transform: rotate(${this.rotate}deg);`;
      this.circle_sunset.dash=true
      return false
    }
    // all (b-a) *2
  };
  ngOnInit(): void {
    this.current_time_percent()
  }

  circle_sunrise: WeatherCircle = {
    width: 150,
    height: 150,
    r: 73,
    stroke_width: 2,
    percent: 0,
    dash: true,
    stroke_dash: 3,
    stroke_color_dash: 'white',
    stroke_color_fill: '#fcd038',
    stroke_color_path: '#e4e4ee',
    rotate: -180,
    translateY: 0,
    offset: 5,
  };
  circle_sunset: WeatherCircle = {
    width: 150,
    height: 150,
    r: 73,
    stroke_width: 2,
    percent: 0,
    dash: false,
    stroke_dash: 3,
    stroke_color_dash: 'white',
    stroke_color_fill: '#c661ff',
    stroke_color_path: '#e4e4ee',
    rotate: 0,
    translateY: -75,
    offset: 5,
  };
}
