import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius',
  standalone: true,
})
export class KelvinToCelsiusPipe implements PipeTransform {
  transform(value: number, decimalPlaces: number = 2): number {
    if (isNaN(value)) {
      return NaN;
    }
    const celsius = value - 273.15;
    return parseFloat(celsius.toFixed(decimalPlaces));
  }
}
