export interface CityBoxData {
  id: number;
  name: string;
  temp: number;
  lat: number;
  lon: number;
  time: number;
  icon: string;
  bgColor: string;
}
export interface WeatherHour {
  time: number;
  temp: number;
  icon: string;
}
