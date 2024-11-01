import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DailyWeather } from '../weather-widget/models/weather.model';

@Component({
  selector: 'app-forecast-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-widget.component.html',
  styleUrl: './forecast-widget.component.scss',
})
export class ForecastWidgetComponent {
  @Input() forecast: DailyWeather | undefined;

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
}
