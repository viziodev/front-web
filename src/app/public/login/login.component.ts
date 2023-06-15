import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { MyResponse } from 'src/app/shared/models/response';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  submit() {
    let data = this.form.getRawValue();
    this.authService.authentification(data).subscribe((data: any) => {
      localStorage.setItem('token', data['token']);
      this.router.navigateByUrl('/dashboard');
    });
  }
}
