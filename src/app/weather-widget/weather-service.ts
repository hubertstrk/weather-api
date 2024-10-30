import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherData(): Observable<any> {
    return this.httpClient
      .get(
        'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=539fdbc15ab95b61ca0df10dc5b07f58'
      )
      .pipe(
        take(1),
        map((data: any) => {
          return data;
        })
      );
  }
}
