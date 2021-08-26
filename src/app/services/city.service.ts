import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  CityBoxData,
  CurrentDetail,
  DailyDetail,
  HourlyDetail,
  WeatherHour,
} from '../app.model';
import { WeatherApiService } from './weather-api.service';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private weatherApiService: WeatherApiService) {}
  data: {}[] = [];
  defaultId: number[] = [];
  getDetailWeather(city: CityBoxData) {
    this.weatherApiService
      .getCityWeather(city.lat, city.lon)
      .subscribe((doc) => {
        this.data.push({
          id: city.id,
          name:city.name,
          color:city.bgColor,
          daily: this.createDailyWeather(doc),
          hourly: this.createHourlyWeather(doc),
          current: this.createCurrentWeather(doc),
        });
        console.log('get detail weather finish');
      });
  }
  updateCity(city: CityBoxData) {
    if (!this.defaultId.includes(city.id)) {
      this.defaultId.push(city.id);
      this.getDetailWeather(city);
    } else return;
  }
  getData(id:number){
    return (this.data[id])
  }
  createDailyWeather(city: any): DailyDetail {
    let daily = city.daily;
    return daily.map((day: any) => {
      return {
        time: day.dt,
        tempMax: day.temp.max,
        tempMin: day.temp.min,
        icon: day.weather[0].icon,
      };
    });
  }
  createHourlyWeather(city: any): HourlyDetail {
    let hourly = city.hourly;

    return hourly.map((hour: any) => {
      return {
        time: hour.dt,
        temp: hour.temp,
        icon: hour.weather[0].icon,
      };
    });
  }
  createCurrentWeather(city: any): CurrentDetail {
    let current = city.current;
    return {
      time: current.dt,
      temp: current.temp,
      icon: current.weather[0].icon,
      description: current.weather[0].description,

      wind_speed: current.wind_speed,
      clouds: current.clouds,
      humidity: current.humidity,

      feels_like: current.feels_like,
      uvi: current.uvi,

      sunrise: current.sunrise,
      sunset: current.sunset,

      wind_deg: current.wind_deg,
    };
  }
}
