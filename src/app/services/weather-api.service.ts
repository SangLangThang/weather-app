import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  API_KEY = '60a7975f42c5fac2a85fe7e11f1f1753';
  /* https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,alerts&appid=60a7975f42c5fac2a85fe7e11f1f1753 */
  /* 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}' */
  API_URL = 'https://api.openweathermap.org/data/2.5/weather?';

  constructor(private httpClient: HttpClient) {
    
  }
  /* private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  } */
  
  getCityByName(city: string): Observable<any> {
    return this.httpClient.get(
      `${this.API_URL}q=${city}&appid=${this.API_KEY}`
    );
  }
  

}
