import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, map, Observable } from 'rxjs';
import { WeatherForecats } from './model';
import { environment } from '../../envrionment/envrionment';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherData(): Observable<WeatherForecats> {
    return this.httpClient
      .get<WeatherForecats>(
        `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${environment.apiKey}`
      )
      .pipe(
        take(1),
        map(response => {
          response.list.map(item => {
            const foo = new Date(item.dt_txt).toLocaleString();
            console.info(foo);
          });

          return response;
        })
      );
  }
}
