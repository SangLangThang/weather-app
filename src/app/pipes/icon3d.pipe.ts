import { Pipe, PipeTransform } from '@angular/core';
import {
  brokenCloudsN,
  brokenCloudsD,
  clearSkyD,
  clearSkyN,
  fewCloudsD,
  fewCloudsN,
  rain,
  scatteredCloudsD,
  scatteredCloudsN,
  showerRain,
  snow,
  thunderstorm,
} from '../app.contants';
@Pipe({
  name: 'icon3d',
})
export class Icon3dPipe implements PipeTransform {
  transform(icon: string): string {
    let result = '';
    switch (icon) {
      case '01d':
        result = clearSkyD;
        break;
      case '01n':
        result = clearSkyN;
        break;
      case '02d':
        result = fewCloudsD;
        break;
      case '02n':
        result = fewCloudsN;
        break;
      case '03d':
        result = scatteredCloudsD;
        break;
      case '03n':
        result = scatteredCloudsN;
        break;
      case '04d':
        result = brokenCloudsD;
        break;
      case '04n':
        result = brokenCloudsN;
        break;
      case '10d':
        result = rain;
        break;
      case '10n':
        result = rain;
        break;
      case '09d':
        result = showerRain;
        break;
      case '09n':
        result = showerRain;
        break;
      case '11d':
        result = thunderstorm;
        break;
      case '11n':
        result = thunderstorm;
        break;
      case '13d':
        result = snow;
        break;
      case '13n':
        result = snow;
        break;
      case '13d':
        result = snow;
        break;
      case '13n':
        result = snow;
        break;
      case '50d':
        result = brokenCloudsD;
        break;
      case '50n':
        result = brokenCloudsN;
        break;
    }
    return result;
  }
}
