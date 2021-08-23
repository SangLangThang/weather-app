import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
})
export class TempPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round((value - 273.15) * 10) / 10
  }
}
