import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IotService {

  constructor(private http: HttpClient ) { }
  
  execute(): Observable<any> {
    return this.http.get("https://bubblefuncapi.azure-api.net/Function1");
  }
}
