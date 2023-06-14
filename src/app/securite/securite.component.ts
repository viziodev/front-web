import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { Auth } from '../shared/classes/auth';
import { MyResponse } from '../shared/models/response';

@Component({
  selector: 'app-securite',
  templateUrl: './securite.component.html',
  styleUrls: ['./securite.component.scss'],
})
export class SecuriteComponent implements OnInit {
  user :User|null=null
  constructor(private authService: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    this.authService
      .user()
      .pipe()
      .subscribe(
        (res: MyResponse) => {
           this.user=res.data
           Auth.user=this.user!
        },
        (error) => {
          this.router.navigate(['/login']);
        }
      );
  }
}
