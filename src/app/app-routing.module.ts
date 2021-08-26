import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesPageComponent } from './pages/cities-page/cities-page.component';
import { CityWeatherComponent } from './pages/city-weather/city-weather.component';

const routes: Routes = [
  { path: '', component: CitiesPageComponent },
  {
    path: 'detail/:id',
    component: CityWeatherComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
