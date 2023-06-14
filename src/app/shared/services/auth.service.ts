import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MyResponse } from '../models/response';
const api = environment.api;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  authentification(data: any) {
    return this.http.post(`${api}/login`, data);
  }
  register(data: any): Observable<MyResponse> {
    return this.http.post<MyResponse>(`${api}/register`, data);
  }
  user(): Observable<MyResponse> {
    const headers = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')} ` },
    };
    return this.http.get<MyResponse>(`${api}/user/current`, headers);
  }

  updateInfoUser(data: any): Observable<MyResponse> {
    const headers = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')} ` },
    };
    return this.http.put<MyResponse>(`${api}/user/current/info`, data, headers);
  }
  updateInfoPassword(data: any): Observable<MyResponse> {
    const headers = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')} ` },
    };
    return this.http.put<MyResponse>(
      `${api}/user/current/password`,
      data,
      headers
    );
  }
}
