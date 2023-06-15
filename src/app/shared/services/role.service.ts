import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyResponse } from '../models/response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) {}

  all(): Observable<MyResponse> {
    return this.http.get<MyResponse>(`${environment.api}/roles`);
  }
}
