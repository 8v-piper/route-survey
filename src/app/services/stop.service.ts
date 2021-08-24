import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import {Stop} from '../Stop';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class StopService {
  private apiUrl = 'http://localhost:5000/stops'
  constructor(private http:HttpClient) { }

  getStops(): Observable<Stop[]> {
    return this.http.get<Stop[]>(this.apiUrl)
  }

  deleteStop(stop: Stop): Observable<Stop> {
    const url = `${this.apiUrl}/${stop.id}`;
    return this.http.delete<Stop>(url);
  }

  updateStopReminder(stop: Stop): Observable<Stop> {
    const url = `${this.apiUrl}/${stop.id}`;
    return this.http.put<Stop>(url, stop, httpOptions)
  }
  addStop(stop: Stop):Observable<Stop> {
    return this.http.post<Stop>(this.apiUrl, stop, httpOptions);
  }
}
