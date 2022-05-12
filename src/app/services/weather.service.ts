import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherAPIBaseURL, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
      params: new HttpParams()
        .set('q', city)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }
}
