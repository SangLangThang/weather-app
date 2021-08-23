import { Component, Input, OnInit } from '@angular/core';
import {CityBoxData} from '../../app.model'
@Component({
  selector: 'app-city-box',
  templateUrl: './city-box.component.html',
  styleUrls: ['./city-box.component.scss']
})
export class CityBoxComponent implements OnInit {
  
  constructor() { }
  @Input() city!:CityBoxData
  
  ngOnInit(): void {

  }

}
