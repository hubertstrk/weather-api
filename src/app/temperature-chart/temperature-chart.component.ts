import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { HourlyWeather } from '../weather-widget/models/weather.model';
import { ChartData, ChartOptions } from './models/chart.model';

@Component({
  selector: 'app-temperature-chart',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './temperature-chart.component.html',
  styleUrl: './temperature-chart.component.scss',
})
export class TemperatureChartComponent implements OnInit {
  @Input() hourly: HourlyWeather[] = [];

  data: ChartData | null = null;
  options: ChartOptions | null = null;

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

  ngOnInit(): void {
    const begin = this.hourly[0].dt;
    const end = begin + 86400 + 1000;

    const filtered = this.hourly.filter(x => x.dt >= begin && x.dt <= end);

    const labels = filtered.map(x => {
      const date = new Date(x.dt * 1000);
      return date.toLocaleTimeString();
    });

    const temperatures = filtered.map(x => this.convertKelvinToCelsius(x.temp));
    const pop = filtered.map(x => x.pop);

    this.data = {
      labels,
      datasets: [
        {
          label: 'Temperature °C',
          data: temperatures,
          fill: false,
          borderColor: '#FF5733',
          tension: 0.3,
          yAxisID: 'yAxis1',
        },
        {
          label: 'Niederschlag %',
          data: pop,
          fill: true,
          borderColor: '#3498DB',
          tension: 0.3,
          yAxisID: 'yAxis2',
        },
      ],
    };

    this.options = {
      scales: {
        yAxis1: {
          title: {
            display: true,
            text: 'Temperature °C',
          },
          position: 'left',
          display: true,
          ticks: {
            callback: function (value: number) {
              return value + ' °C';
            },
          },
        },
        yAxis2: {
          title: {
            display: true,
            text: 'Niederschlag %',
          },
          position: 'right',
          display: true,
          suggestedMin: 0,
          suggestedMax: 1,
          ticks: {
            callback: function (value: number) {
              return value * 100 + '%';
            },
          },
        },
      },
    };
  }
}
