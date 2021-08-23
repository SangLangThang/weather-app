import { Pipe, PipeTransform } from '@angular/core';
import {
  ic_sun,
  ic_moon,
  ic_brokenclouds_d,
  ic_brokenclouds_n,
  ic_fewclouds_n,
  ic_fewclouds_d,
  ic_rain_d,
  ic_rain_n,
  ic_scatteredclouds_d,
  ic_scatteredclouds_n,
  ic_showerrain_d,
  ic_showerrain_n,
  ic_snow_d,
  ic_snow_n,
  ic_thunderstorm_d,
  ic_thunderstorm_n,
  ic_mist
} from '../app.contants';
@Pipe({
  name: 'icon2d',
})
export class Icon2dPipe implements PipeTransform {
  transform(icon: string): string {
    let result = '';
    switch (icon) {
      case '01d':
        result = ic_sun;
        break;
      case '01n':
        result = ic_moon;
        break;
      case '02d':
        result = ic_fewclouds_d;
        break;
      case '02n':
        result = ic_fewclouds_n;
        break;
      case '03d':
        result = ic_scatteredclouds_d;
        break;
      case '03n':
        result = ic_scatteredclouds_n;
        break;
      case '04d':
        result = ic_brokenclouds_d;
        break;
      case '04n':
        result = ic_brokenclouds_n;
        break;
      case '10d':
        result = ic_rain_d;
        break;
      case '10n':
        result = ic_rain_n;
        break;
      case '09d':
        result = ic_showerrain_d;
        break;
      case '09n':
        result = ic_showerrain_n;
        break;
      case '11d':
        result = ic_thunderstorm_d;
        break;
      case '11n':
        result = ic_thunderstorm_n;
        break;
      case '13d':
        result = ic_snow_d;
        break;
      case '13n':
        result = ic_snow_n;
        break;
      case '50d':
        result = ic_mist;
        break;
      case '50n':
        result = ic_mist;
        break;
    }
    return result;
  }
}
