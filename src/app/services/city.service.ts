import { Injectable } from '@angular/core';
import { CityBoxData, DailyDetail, HourlyDetail } from '../app.model';
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
        this.data[city.id] = {
          id: city.id,
          daily: this.createDailyWeather(doc.daily),
          hourly: this.createHourlyWeather(doc.hourly),
          current: {
            wind: {
              wind_deg: doc.current.wind_deg,
              wind_speed: doc.current.wind_speed,
              wind_color: doc.current.dt,
            },
            sun: {
              sunrise_time: doc.current.sunrise,
              sunset_time: doc.current.sunset,
              current_time: doc.current.dt,
            },
            comfort: {
              humidity: doc.current.humidity,
              feels_like: doc.current.feels_like,
              uvi: doc.current.uvi,
            },
            main: {
              name: city.name,
              color: city.bgColor,
              timezone_offset: doc.timezone_offset,
              time: doc.current.dt,
              icon: doc.current.weather[0].icon,
              temp: Math.round(doc.current.temp * 10) / 10,
              description: doc.current.weather[0].description,
              wind_speed: doc.current.wind_speed,
              clouds: doc.current.clouds,
              humidity: doc.current.humidity,
            },
          },
        };
        console.log('get detail weather finish');
      });
  }
  updateCity(city: CityBoxData) {
    if (!this.defaultId.includes(city.id)) {
      this.defaultId[city.id]=city.id;
      this.getDetailWeather(city);
    } else return;
  }
  getData(id: number) {
    console.log(this.data)
    return this.data[id]
  }
  createDailyWeather(daily: any): DailyDetail {
    return daily.map((day: any) => {
      return {
        time: day.dt,
        tempMax: Math.round(day.temp.max * 10) / 10,
        tempMin: Math.round(day.temp.min * 10) / 10,
        icon: day.weather[0].icon,
      };
    });
  }
  createHourlyWeather(hourly: any): HourlyDetail {
    return hourly.map((hour: any) => {
      return {
        time: hour.dt,
        temp: Math.round(hour.temp * 10) / 10,
        icon: hour.weather[0].icon,
      };
    });
  }
}
