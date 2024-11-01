import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, take } from 'rxjs';
import { environment } from '../../envrionment/envrionment';
import {
  CityLocation,
  Weather,
  WeatherWithLocation,
} from './models/weather.model'; // Import CityLocation

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentByName(name: string): Observable<WeatherWithLocation> {
    return this.getLocationByName(name).pipe(
      switchMap((city: CityLocation) => {
        return this.httpClient
          .get<Weather>(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&exclude=minutely&lang=de&appid=${environment.apiKey}`
          )
          .pipe(
            map(weather => ({
              weather,
              location: city,
            }))
          );
      }),
      take(1),
      map(response => {
        return response;
      })
    );
  }

  getLocationByName(name: string): Observable<CityLocation> {
    return this.httpClient
      .get<
        CityLocation[]
      >(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${environment.apiKey}`)
      .pipe(
        take(1),
        map(response => {
          return response[0];
        })
      );
  }

  // getForecast(): Observable<WeatherForecats> {
  //   return this.httpClient
  //     .get<WeatherForecats>(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${environment.apiKey}`
  //     )
  //     .pipe(
  //       take(1),
  //       map(response => {
  //         return response;
  //       })
  //     );
  // }
}
