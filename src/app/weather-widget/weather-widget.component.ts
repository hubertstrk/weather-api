import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { KelvinToCelsiusPipe } from '../conversion.pipe';
import { SunriseComponent } from '../sunrise/sunrise.component';
import { TemperatureChartComponent } from '../temperature-chart/temperature-chart.component';
import { WeatherDetailValuesComponent } from '../weather-detail-values/weather-detail-values.component';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { WeatherWithLocation } from './models/weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  imports: [
    CommonModule,
    ChipModule,
    DividerModule,
    KelvinToCelsiusPipe,
    WeatherForecastComponent,
    SunriseComponent,
    WeatherDetailValuesComponent,
    TemperatureChartComponent,
    AccordionModule,
  ],
})
export class WeatherWidgetComponent implements OnInit {
  weatherData: WeatherWithLocation | null = null;

  activeIndex = 0;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getCurrentByName('Schwandorf').subscribe(data => {
      this.weatherData = data;
    });
  }
}
