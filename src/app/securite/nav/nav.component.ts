import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/shared/classes/auth';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  user: User | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {
    Auth.userEmitter.subscribe((user:User)=>{
        this.user=user;
    })
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
