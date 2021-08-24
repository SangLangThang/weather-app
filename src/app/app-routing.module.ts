import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { CitiesPageComponent } from './pages/cities-page/cities-page.component';
import { CityWeatherComponent } from './pages/city-weather/city-weather.component';

const routes: Routes = [
  { path: '', component: CityWeatherComponent },
  { path: 'test', component: WeatherTodayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
