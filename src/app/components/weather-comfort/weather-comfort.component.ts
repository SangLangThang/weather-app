import { Component, OnInit, Input } from '@angular/core';
import { WeatherCircle } from 'src/app/app.model';

@Component({
  selector: 'app-weather-comfort',
  templateUrl: './weather-comfort.component.html',
  styleUrls: ['./weather-comfort.component.scss'],
})
export class WeatherComfortComponent implements OnInit {
  constructor() {}
  @Input() comfort!:any
  @Input()color!:string



  ngOnInit(): void {
    this.circle1.percent=this.comfort.humidity
  }
  circle1: WeatherCircle = {
    gradient1: '#467bff',
    gradient2: '#c661ff',
    width: 140,
    height: 140,
    r: 50,
    stroke_width: 10,
    percent:0,
    dash: false,
    stroke_color_fill: '#f4f4f8',
    stroke_color_path: '#e4e4ee',
    rotate: -235,
    translateY: 0,
    offset: 2,

    name: 'abcd',
  };
}
