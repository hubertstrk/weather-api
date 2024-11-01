import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { WeatherWithLocation } from './models/weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  imports: [CommonModule, ChipModule, DividerModule, WeatherForecastComponent], // Add ChipsModule to imports
})
export class WeatherWidgetComponent implements OnInit {
  weatherData: WeatherWithLocation | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getCurrentByName('Hawai').subscribe(data => {
      this.weatherData = data;
    });
  }

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

  convertUnixTimeToLocalTime(unixTime: number): string {
    // convert unit time to hh-mm
    const date = new Date(unixTime * 1000);
    return date.toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
