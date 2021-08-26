import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-water',
  templateUrl: './svg-water.component.html',
  styleUrls: ['./svg-water.component.scss']
})
export class SvgWaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    console.log('asasdsa')
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
