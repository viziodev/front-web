import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuriteComponent } from './securite.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../shared/components/ui/ui.module';

@NgModule({
  declarations: [
    SecuriteComponent,
    MenuComponent,
    NavComponent,
    UsersComponent,
    DashboardComponent,
    ProfilComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    UiModule,
  ],
})
export class SecuriteModule {}
