import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyResponse } from '../models/response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  all(currentUrl: string|null): Observable<MyResponse> {
    if(!currentUrl){
      currentUrl=`${environment.api}/users`
    }
    return this.http.get<MyResponse>(currentUrl);
  }
  remove(id:number){
    return this.http.delete<MyResponse>(`${environment.api}/users/${id}`)
  }
}
