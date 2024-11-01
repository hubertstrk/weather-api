import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { take } from 'lodash';
import { ForecastWidgetComponent } from '../forecast-widget/forecast-widget.component';
import { DailyWeather } from '../weather-widget/models/weather.model';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [CommonModule, ForecastWidgetComponent],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss',
})
export class WeatherForecastComponent implements OnInit {
  @Input() forecast: DailyWeather[] | null = null;

  items: DailyWeather[] = [];

  ngOnInit(): void {
    this.items = take(this.forecast, 5);
  }
}
