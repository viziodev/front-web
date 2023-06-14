import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { SecuriteComponent } from './securite/securite.component';
import { PublicComponent } from './public/public.component';
import { UsersComponent } from './securite/users/users.component';
import { DashboardComponent } from './securite/dashboard/dashboard.component';
import { ProfilComponent } from './securite/profil/profil.component';

const routes: Routes = [
  {
    path: '',
    component: SecuriteComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profil', component: ProfilComponent },
    ],
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
