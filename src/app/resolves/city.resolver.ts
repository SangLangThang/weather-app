import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CityService } from '../services/city.service';

@Injectable({
  providedIn: 'root'
})
export class CityResolver implements Resolve<boolean> {
  constructor(private cityService: CityService) {} 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }
}
