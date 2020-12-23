import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<object>(this.baseUrl);
  }

  getFiltered(query): Observable<any> {
    return this.http.get<object>(this.baseUrl + query);
  }


}
