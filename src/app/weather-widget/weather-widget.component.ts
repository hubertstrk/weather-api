import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather-service';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.scss',
})
export class WeatherWidgetComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // write a sevrice call to openweather api
    this.weatherService.getWeatherData().subscribe(data => {
      console.log(data);
    });
  }
}
