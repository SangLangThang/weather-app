import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { CurrentDetail } from 'src/app/app.model';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.scss'],
})
export class WeatherCurrentComponent implements OnInit {
  
  @Input() current!:CurrentDetail
  @Input()name!:string;
  constructor() {}
  handleClick() {
    console.log("emit event")
    this.toggle.emit()
  }
  @Output() toggle = new EventEmitter();
  ngOnInit(): void {}
}
