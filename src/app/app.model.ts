
export interface CityBoxData {
  id:number;
  name: string;
  temp:number;
  lat: number;
  lon: number;
  time: number;
  icon: string;
  bgColor:string;
}
export interface WeatherHour {
  current:boolean;
  time: number;
  temp:number;
  icon: string;
}