import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Link, MyResponse } from 'src/app/shared/models/response';
import { Role } from 'src/app/shared/models/role';
import { RoleService } from 'src/app/shared/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  constructor(
    private roleService: RoleService,
    private route: ActivatedRoute
  ) {}
  roles: Role[] = [];
  ngOnInit(): void {
    this.roles = (this.route.snapshot.data as any).res.data;
   
  }

  refresh() {
    this.roleService.all().subscribe((res: MyResponse) => {
      this.roles = res.data;
    });
  }

  onDelete(role: Role) {
    this.roleService.remove(role.id).subscribe({
      next: (res: MyResponse) => {
        this.refresh();
      },
    });
  }
}
