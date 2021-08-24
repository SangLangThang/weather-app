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
  current: boolean;
  bgColor: string;
}
export interface WeatherCircle {
  width: number;
  height: number;
  stroke_width: number;
  stroke_color_fill: string;
  stroke_color_path: string;
  /* if have circle dash */
  dash: boolean;
  stroke_dash?: number;
  stroke_color_dash?: string;

  rotate?:number;
  translateY?:number;
  r:number;
  offset:number;
  /* if have gradient color stroke */
  gradient1?:string;
  gradient2?:string;

  name?:string;
}
