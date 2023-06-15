import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyResponse } from 'src/app/shared/models/response';
import { Role } from 'src/app/shared/models/role';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RoleService } from 'src/app/shared/services/role.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  roles: Role[] = [];
  form: FormGroup;
  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
      name: '',
      role: 0,
    });
  }

  ngOnInit(): void {
    this.roleService
      .all()
      .subscribe({
        next: (res: MyResponse) => (this.roles = res.data),
        error: (err) => {
          
        },
      });
  }

  submit() {
    let data = this.form.getRawValue();
    this.userService.create(data).subscribe((data: any) => {
      this.router.navigateByUrl('/users');
    });
  }
}
