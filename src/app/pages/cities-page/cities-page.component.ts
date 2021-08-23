import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin, throwError,timer } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
    private citiesService: CitiesService
  ) {}
  submitted: boolean = false;
  cities: CityBoxData[] = [];
  arrayColor: string[] = [];

  addCityControl = new FormControl();
  searchCity:string=''
  errorMessage: string = '';

  handleCancel() {
    this.submitted = false;
    this.isAddCity = !this.isAddCity;
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
          this.errorMessage=''
        });
    } else {
      this.isAddCity = !this.isAddCity;
      this.submitted = false;
    }
  }
  defaultCity = ['new york', 'tokyo','london'];
  isAddCity: boolean = false;

  ngOnInit(): void {
    this.arrayColor = this.citiesService.getRandomColor();
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
  
}
