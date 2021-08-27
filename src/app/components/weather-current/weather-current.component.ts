import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cloud, water_drop, wind } from 'src/app/app.contants';
@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.scss'],
})
export class WeatherCurrentComponent implements OnInit {
  wind=wind
  water_drop=water_drop
  cloud=cloud

  @Input() current!:any
  constructor() {
    
  }
  handleClick() {
    this.toggle.emit()
  }
  @Output() toggle = new EventEmitter();
  ngOnInit(): void {}
}
