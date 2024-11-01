import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { KelvinToCelsiusPipe } from '../conversion.pipe';
import { DailyWeather } from '../weather-widget/models/weather.model';

@Component({
  selector: 'app-forecast-widget',
  standalone: true,
  imports: [CommonModule, KelvinToCelsiusPipe],
  templateUrl: './forecast-widget.component.html',
  styleUrl: './forecast-widget.component.scss',
})
export class ForecastWidgetComponent {
  @Input() forecast: DailyWeather | undefined;
}
