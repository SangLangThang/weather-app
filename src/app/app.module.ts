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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HammerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
