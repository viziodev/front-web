import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { SecuriteComponent } from './securite/securite.component';
import { PublicComponent } from './public/public.component';
import { UsersComponent } from './securite/users/users.component';
import { DashboardComponent } from './securite/dashboard/dashboard.component';
import { ProfilComponent } from './securite/profil/profil.component';
import { CreateUserComponent } from './securite/users/create-user/create-user.component';
import { RoleComponent } from './securite/role/role.component';
import { CreateRoleComponent } from './securite/role/create-role/create-role.component';
import { RoleResolver } from './securite/role/role.resolver';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SecuriteComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: DashboardComponent },
      { path: 'profil', component: ProfilComponent },

      { path: 'users', component: UsersComponent },
      { path: 'users/save', component: CreateUserComponent },
      { path: 'users/:id/edit', component: CreateUserComponent },

      {
        path: 'roles',
        component: RoleComponent,
        resolve: {
          res: RoleResolver,
        },
      },
      { path: 'roles/save', component: CreateRoleComponent },
      { path: 'roles/:id/edit', component: CreateRoleComponent },
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
