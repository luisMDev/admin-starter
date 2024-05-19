import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@arcane-auth/ngx-client';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./views/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () => import('./views/auth/views/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'recover',
        loadComponent: () => import('./views/auth/views/recover/recover.component').then((m) => m.RecoverComponent),
      },
      {
        path: 'register',
        loadComponent: () => import('./views/auth/views/register/register.component').then((m) => m.RegisterComponent),
      },
    ],
  },
  {
    canActivate: [AuthGuard],
    path: 'l',
    loadComponent: () => import('./views/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./views/dashboard/views/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('./views/dashboard/views/profile/profile.component').then((m) => m.ProfileComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
