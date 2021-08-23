import { Injectable } from '@angular/core';
import { CityBoxData } from '../app.model';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor() {}

  getRandomColor() {
    let defaultColor = ['color-1', 'color-2', 'color-3'];
    let result = [];
    let oldColor = '';
    let currentColor = '';
    for (let i = 0; i < 50; i++) {
      currentColor =
        defaultColor[Math.floor(Math.random() * defaultColor.length)];

      while (currentColor === oldColor) {
        currentColor =
          defaultColor[Math.floor(Math.random() * defaultColor.length)];
      }
      oldColor = currentColor;
      result.push(currentColor);
    }
    return result;
  }
  arrayColor = this.getRandomColor();
  createCityInfo(city: any, index: number, arrColor: string[]) {
    return {
      id: index,
      name: city.name,
      temp: city.main.temp,
      lat: city.coord.lat,
      lon: city.coord.lon,
      time: city.dt,
      icon: city.weather[0].icon,
      bgColor: arrColor[index],
    };
  }
}
