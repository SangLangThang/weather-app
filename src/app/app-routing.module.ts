import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { CitiesPageComponent } from './pages/cities-page/cities-page.component';

const routes: Routes = [
  { path: '', component: CitiesPageComponent },
  { path: 'test', component: WeatherTodayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
