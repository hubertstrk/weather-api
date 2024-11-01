import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { KelvinToCelsiusPipe } from '../conversion.pipe';
import { WeatherWithLocation } from '../weather-widget/models/weather.model';

@Component({
  selector: 'app-weather-detail-values',
  standalone: true,
  imports: [CommonModule, ChipModule, KelvinToCelsiusPipe],
  templateUrl: './weather-detail-values.component.html',
  styleUrl: './weather-detail-values.component.scss',
})
export class WeatherDetailValuesComponent {
  @Input() weatherData: WeatherWithLocation | null = null;
}
