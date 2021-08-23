import { Injectable } from '@angular/core';
import { CityBoxData, WeatherHour } from '../app.model';
import { WeatherApiService } from './weather-api.service';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private weatherApiService: WeatherApiService) {}

  data: WeatherHour[] = [];
  getDetailWeather(city: CityBoxData) {
    return this.weatherApiService.getCityWeather(city.lat, city.lon, 'hourly');
  }
  updateHours(data: WeatherHour[]) {
    this.data = [...data]
  }
  getData(){
    return this.data
  }
}
