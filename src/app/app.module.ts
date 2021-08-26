import { NgModule } from '@angular/core';
import {
  BrowserModule,
  HammerModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as Hammer from 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesPageComponent } from './pages/cities-page/cities-page.component';
import { CityWeatherComponent } from './pages/city-weather/city-weather.component';
import { CityBoxComponent } from './components/city-box/city-box.component';
import { TempPipe } from './pipes/temp.pipe';
import { Icon3dPipe } from './pipes/icon3d.pipe';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { WeatherHourComponent } from './components/weather-hour/weather-hour.component';
import { Icon2dPipe } from './pipes/icon2d.pipe';
import { WeatherWeekComponent } from './components/weather-week/weather-week.component';
import { WeatherComfortComponent } from './components/weather-comfort/weather-comfort.component';
import { WeatherSunComponent } from './components/weather-sun/weather-sun.component';
import { WeatherWindComponent } from './components/weather-wind/weather-wind.component';
import { WeatherCircleComponent } from './components/weather-circle/weather-circle.component';
import { WeatherCurrentComponent } from './components/weather-current/weather-current.component';
import { SvgWaterComponent } from './svg/svg-water/svg-water.component';
import { SvgWindComponent } from './svg/svg-wind/svg-wind.component';
import { SvgSkyComponent } from './svg/svg-sky/svg-sky.component';
import { SvgTreeComponent } from './svg/svg-tree/svg-tree.component';
import { WindDirectionPipe } from './pipes/wind-direction.pipe';

export class HammerConfig extends HammerGestureConfig {
 /*  overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL },
  }; */
}
@NgModule({
  declarations: [
    AppComponent,
    CitiesPageComponent,
    CityWeatherComponent,
    CityBoxComponent,
    TempPipe,
    Icon3dPipe,
    FilterSearchPipe,
    WeatherTodayComponent,
    WeatherHourComponent,
    Icon2dPipe,
    WeatherWeekComponent,
    WeatherComfortComponent,
    WeatherSunComponent,
    WeatherWindComponent,
    WeatherCircleComponent,
    WeatherCurrentComponent,
    SvgWaterComponent,
    SvgWindComponent,
    SvgSkyComponent,
    SvgTreeComponent,
    WindDirectionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HammerModule,
  ],
  providers: [{ 
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: HammerConfig 
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
