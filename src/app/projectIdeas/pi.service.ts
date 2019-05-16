import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PIService {
  constructor(private http: HttpClient) { }

  getPIs(): Observable<any> {
    return this.http.get('https://localhost:8443/api/v1/projectIdeas/');
  }
}
