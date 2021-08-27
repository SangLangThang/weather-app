import { Component, OnInit ,Input} from '@angular/core';
@Component({
  selector: 'app-weather-wind',
  templateUrl: './weather-wind.component.html',
  styleUrls: ['./weather-wind.component.scss'],
})
export class WeatherWindComponent implements OnInit {
  @Input()wind!:any;
  @Input()color!:string
  constructor() {}

  ngOnInit(): void {
    
  }
}
