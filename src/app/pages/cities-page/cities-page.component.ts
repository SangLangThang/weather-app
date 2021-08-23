import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { WeatherHour } from 'src/app/app.model';
import { CityService } from 'src/app/services/city.service';
import { CitiesService } from '../../services/cities.service';
import { WeatherApiService } from '../../services/weather-api.service';
import { CityBoxData } from './../../app.model';
@Component({
  selector: 'app-cities-page',
  templateUrl: './cities-page.component.html',
  styleUrls: ['./cities-page.component.scss'],
})
export class CitiesPageComponent implements OnInit {
  constructor(
    private weatherApiService: WeatherApiService,
    private citiesService: CitiesService,
    private cityService: CityService,
    private router: Router
  ) {}
  submitted: boolean = false;
  cities: CityBoxData[] = [];

  addCityControl = new FormControl();
  searchCity: string = '';
  errorMessage: string = '';

  handleCancel() {
    this.submitted = false;
    this.isAddCity = !this.isAddCity;
  }
  detailCity(city: CityBoxData) {
    this.cityService.getDetailWeather(city).subscribe((doc) => {
      let data: WeatherHour[] = [];
      for (let i = 0; i < 24; i++) {
        data.push({
          time: doc.hourly[i].dt*1000,
          temp: doc.hourly[i].temp,
          icon: doc.hourly[i].weather[0].icon,
        });
      }
      this.cityService.updateHours(data)
      
      this.router.navigateByUrl('/test')
    });
  }
  addCity() {
    if (this.addCityControl.value) {
      this.submitted = true;
      this.weatherApiService
        .getCityByName(this.addCityControl.value)
        .pipe(
          catchError((err) => {
            this.errorMessage = err.error.message;
            this.submitted = false;
            return throwError(err);
          })
        )
        .subscribe((city) => {
          console.log('Get API finish');
          let data = this.citiesService.createCityInfo(
            city,
            this.cities.length,
            this.arrayColor
          );
          this.cities.push(data);
          this.addCityControl.reset();
          this.submitted = false;
          this.isAddCity = !this.isAddCity;
          this.errorMessage = '';
        });
    } else {
      this.isAddCity = !this.isAddCity;
      this.submitted = false;
    }
  }
  defaultCity = ['new york', 'tokyo', 'london'];
  isAddCity: boolean = false;
  arrayColor = this.citiesService.arrayColor;

  ngOnInit(): void {
    forkJoin([
      ...this.defaultCity.map((city) => {
        return this.weatherApiService.getCityByName(city);
      }),
    ]).subscribe((docs) => {
      docs.forEach((city, index) => {
        let data = this.citiesService.createCityInfo(
          city,
          index,
          this.arrayColor
        );
        this.cities.push(data);
      });
    });
  }
  ngOnDestroy() {
    console.log('Destroy');
  }
}
