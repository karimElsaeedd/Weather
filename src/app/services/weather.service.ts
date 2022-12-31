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

  weatherAppBaseUrl:string = 'https://weatherapi-com.p.rapidapi.com/current.json'
  XRapidAPIKeyHeaderName:string = 'X-RapidAPI-Key'
  XRapidAPIKeyHeaderValue:string = '344b553260msh7092ae85f51bef4p1099f5jsnab8dc5aa7076'
  XRapidAPIHostHeaderName:string = 'X-RapidAPI-Host'
  XRapidAPIHostHeaderValue:string = 'weatherapi-com.p.rapidapi.com'

  getWeatherData(cityName : string):Observable<weatherData> {
    return this.Http.get<weatherData>(this.weatherAppBaseUrl,{
      headers: new HttpHeaders()
        .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue)
        .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue),
        params : new HttpParams()
        .set('q', cityName)
    })
  }
}
