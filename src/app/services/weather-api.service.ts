import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  API_KEY = '60a7975f42c5fac2a85fe7e11f1f1753';
  API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  API_ONECALL_URL = 'https://api.openweathermap.org/data/2.5/onecall?';

  constructor(private httpClient: HttpClient) {}

  getCityByName(city: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}`, {
      params: new HttpParams({ fromString: `q=${city}&appid=${this.API_KEY}` }),
    });
  }
  getCityWeather(lat: number, lon: number, config: string): Observable<any> {
    let excludeDefault=['current','minutely','hourly','daily','alerts']
    let exclude=excludeDefault.filter(e=>e!=config).toLocaleString()
    return this.httpClient.get(`${this.API_ONECALL_URL}`, {
      params: new HttpParams({
        fromString: `lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${this.API_KEY}`,
      }),
    });
  }
}
