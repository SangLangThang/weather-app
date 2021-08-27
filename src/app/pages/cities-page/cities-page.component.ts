import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CitiesService } from '../../services/cities.service';
import { CityBoxData } from './../../app.model';
@Component({
  selector: 'app-cities-page',
  templateUrl: './cities-page.component.html',
  styleUrls: ['./cities-page.component.scss'],
})
export class CitiesPageComponent implements OnInit {
  constructor(
    private citiesService: CitiesService,
    
  ) {}
  submitted: boolean = false;
  cities: CityBoxData[] = [];

  addCityControl = new FormControl();
  searchCity: string = '';
  errorMessage: string = '';
  isAddCity: boolean = false;

  handleCancel() {
    this.submitted = false;
    this.isAddCity = !this.isAddCity;
  }
 
  addCity() {
    if (this.addCityControl.value) {
      this.submitted = true;
      this.citiesService
        .addCity(this.addCityControl.value)
        .pipe(
          catchError((err) => {
            this.errorMessage = err.error.message;
            this.submitted = false;
            return throwError(err);
          })
        )
        .subscribe((city) => {
          this.cities.push(
            this.citiesService.createCityInfo(city, this.cities.length)
          );
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
  ngOnInit(): void {
    this.citiesService.getCityInfo().subscribe((docs) => {
      docs.forEach((doc, index) => {
        this.cities.push(this.citiesService.createCityInfo(doc, index));
      });
    });
    
  }
  
  ngOnDestroy() {
    console.log('Destroy');
  }
}
