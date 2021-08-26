import { Component, OnInit,Input } from '@angular/core';
import { DailyDetail } from 'src/app/app.model';

@Component({
  selector: 'app-weather-week',
  templateUrl: './weather-week.component.html',
  styleUrls: ['./weather-week.component.scss'],
})
export class WeatherWeekComponent implements OnInit {
  constructor() {}
  @Input()week: DailyDetail[] = [];
  ngOnInit(): void {
    console.log(this.week)
  }
}
