import { CitiesService } from './../../services/cities.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private citiesService: CitiesService,
    private router: Router,
  ) {}

  showPageAction: boolean = false;

  toggleAction() {
    this.showPageAction = !this.showPageAction;
  }
  data: any = {};

  name: string = '';

  ngOnInit(): void {
    const itemId = +this.route.snapshot.params['id'];
    this.data = this.cityService.getData(itemId);
    console.log(this.data)
    if(this.data===undefined){
      this.router.navigateByUrl("/")
    }
  }
  ngOnDestroy() {
    console.log('Destroy Detail');
  }
}
