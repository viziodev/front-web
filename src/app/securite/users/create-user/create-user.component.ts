import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'src/app/shared/models/action';
import { MyResponse } from 'src/app/shared/models/response';
import { Role } from 'src/app/shared/models/role';
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
  action: Action = Action.ADD;

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
      name: '',
      role: 0,
      id: 0,
    });
  }

  ngOnInit(): void {
    this.roleService.all().subscribe({
      next: (res: MyResponse) => (this.roles = res.data),
      error: (err) => {},
    });

    this.route.params.subscribe((param: any) => {
      if (param.id != undefined) {
        this.action = Action.EDIT;
        this.userService.one(param.id).subscribe((res: MyResponse) => {
          this.form.patchValue({
            email: res.data.email,
            password: '',
            name: res.data.name,
            role: res.data.role_id,
            id: res.data.id,
          });
        });
      }
    });
  }

  submit() {
    let data = this.form.getRawValue();
    this.action == Action.EDIT ? this.updateUser(data) : this.createUser(data);
    this.form.reset();
    this.router.navigateByUrl('/users');
  }

  private updateUser(data: any) {
    this.userService.update(data).subscribe();
  }

  private createUser(data: any) {
    this.userService.create(data).subscribe();
  }
}
