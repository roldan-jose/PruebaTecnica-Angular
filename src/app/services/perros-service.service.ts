import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IPerros } from '../models/perros.interface';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerrosServiceService {


  constructor(private http: HttpClient) { }

  ListPerros(): Observable<any>{
    return this.http.get<IPerros>(`${environment.API_URL}/5`);
  }
  ListPerroOne(): Observable<any>{
    return this.http.get(`${environment.API_URL}/1`);
  }
}
