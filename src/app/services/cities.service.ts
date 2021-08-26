import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { WeatherApiService } from './weather-api.service';
import { CityService } from 'src/app/services/city.service';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(
    private weatherApiService: WeatherApiService,
    private cityService: CityService
  ) {}

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
  /* ***************************************************** */
  createCityInfo(city: any, index: number) {
    let data = {
      id: index,
      name: city.name,
      temp: city.main.temp,
      lat: city.coord.lat,
      lon: city.coord.lon,
      time: city.dt,
      icon: city.weather[0].icon,
      bgColor: this.arrayColor[index],
    };
    this.cityService.updateCity(data);
    return data;
  }
  /* ***************************************************** */
  defaultCity = ['nha trang','da lat'];
  getCityInfo() {
    return forkJoin([
      ...this.defaultCity.map((city) => {
        return this.weatherApiService.getCityByName(city);
      }),
    ]);
  }
  /* ***************************************************** */
  addCity(city: string) {
    this.defaultCity.push(city);
    return this.weatherApiService.getCityByName(city);
  }
  updateCity() {}
}
