import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  constructor(private weatherService: WeatherService) {}
  weatherData?: WeatherData;
  cityName: string = 'Wellington';

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  onSubmit() {
    if (!this.cityName) {
      this.cityName = 'Hanoi';
    }
    this.getWeatherData(this.cityName);
  }
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
    });
  }
}
