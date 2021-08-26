export interface CityBoxData {
  id: number;
  name: string;
  temp: number;
  lat: number;
  lon: number;
  icon: string;
  bgColor: string;
}
export interface WeatherHour {
  time: number;
  temp: number;
  icon: string;
  current: boolean;
  bgColor: string;
}
export interface WeatherCircle {
  width: number;
  height: number;
  stroke_width: number;
  stroke_color_fill: string;
  stroke_color_path: string;
  percent:number;
  /* if have circle dash */
  dash: boolean;
  stroke_dash?: number;
  stroke_color_dash?: string;

  rotate?: number;
  translateY?: number;
  r: number;
  offset: number;
  /* if have gradient color stroke */
  gradient1?: string;
  gradient2?: string;

  name?: string;
}
export interface DailyDetail {
  time: number;
  tempMax: number;
  tempMin: number;
  icon: string;
}
export interface HourlyDetail {
  time: number;
  temp: number;
  icon: string;
}
export interface CurrentDetail {
  time: number;
  temp: number;
  icon: string;
  description: string;

  wind_speed: number;
  clouds: number;
  humidity: number;

  feels_like: number;
  uvi: number;

  sunrise: number;
  sunset: number;

  wind_deg: number;
}
