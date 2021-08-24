import { Component, OnInit } from '@angular/core';
import { WIND } from 'src/app/app.contants'; 
@Component({
  selector: 'app-weather-wind',
  templateUrl: './weather-wind.component.html',
  styleUrls: ['./weather-wind.component.scss']
})
export class WeatherWindComponent implements OnInit {
WIND=WIND
  constructor() { }

  ngOnInit(): void {
  }

}
