import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { weatherData } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private Http : HttpClient) { }

  getWeatherData(cityName : string):Observable<weatherData> {
    return this.Http.get<weatherData>(environment.weatherAppBaseUrl,{
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
        params : new HttpParams()
        .set('q', cityName)
    })
  }
}
