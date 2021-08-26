import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { WeatherCircle } from 'src/app/app.model';

@Component({
  selector: 'app-weather-circle',
  templateUrl: './weather-circle.component.html',
  styleUrls: ['./weather-circle.component.scss'],
})
export class WeatherCircleComponent implements OnInit {
  @ViewChild('circle_fill') circle_fill!: ElementRef<HTMLDivElement>;
  @ViewChild('circle_path') circle_path!: ElementRef<HTMLDivElement>;
  @ViewChild('circle_dash') circle_dash!: ElementRef<HTMLDivElement>;
  @ViewChild('linear_gradient') linear_gradient!: ElementRef<HTMLDivElement>;
  constructor() {}

  @Input() circle!: WeatherCircle;
  classRotate: string = '';
  gradient: any;
  offsetData(
    target: ElementRef<HTMLDivElement>,
    offsetInit: number,
    percent: number
  ) {
    let current = target.nativeElement;
    let radius = this.circle.r;
    let circumference = 2 * Math.PI * radius;

    let offsetData =
      circumference -
      ((circumference - circumference * (offsetInit / 10)) / 100) * percent;

    current.style.setProperty('--initialStroke', `${circumference}`);
    current.style.strokeDashoffset = `${offsetData}`;
  }

  ngOnInit(): void {
    this.classRotate = `transform: rotate(${this.circle.rotate}deg) translateY(${this.circle.translateY}px);`;
    this.gradient =
      this.circle.gradient1 != undefined
        ? `url(#${this.circle.name})`
        : this.circle.stroke_color_fill;
  }
  ngAfterViewInit() {
    this.offsetData(this.circle_fill, this.circle.offset, this.circle.percent);
    this.offsetData(this.circle_path, this.circle.offset, 100);
  }
}
