import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MyResponse } from 'src/app/shared/models/response';
import { Role } from 'src/app/shared/models/role';
import { RoleService } from 'src/app/shared/services/role.service';

@Injectable({
  providedIn: 'root'
})
export class RoleResolver implements Resolve<MyResponse> {
  constructor(private roleService: RoleService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MyResponse> {
    return this.roleService.all();
  }
}
