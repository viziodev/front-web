import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from 'src/app/shared/classes/auth';
import { MyResponse } from 'src/app/shared/models/response';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  formUpdateUser: FormGroup;
  formUpdatePassword: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.formUpdateUser = this.fb.group({
      email: Auth.user.email,
      name: Auth.user.name,
    });

    this.formUpdatePassword = this.fb.group({
      password: '',
      confirm_password: '',
    });
  }

  ngOnInit(): void {}
  submitUpdateUser() {
    const data = this.formUpdateUser.getRawValue();
    this.authService.updateInfoUser(data).subscribe((res: MyResponse) => {
      Auth.user = res.data;
    });
  }
  submitUpdatePassword() {
    const data = this.formUpdateUser.getRawValue();
    this.authService.updateInfoPassword(data).subscribe((res: MyResponse) => {
      Auth.user = res.data;
    });
  }
}
