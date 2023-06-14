import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
      name: '',
      role: 1,
    });
  }

  ngOnInit(): void {}

  submit() {
    let data = this.form.getRawValue();
    this.authService.register(data).subscribe((data: any) => {
      this.router.navigateByUrl('/users');
    });
  }
}
