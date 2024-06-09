import { Routes } from '@angular/router';
import { AuthGuard } from '@arcane-auth/ngx-client';

export const routes: Routes = [
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
    loadComponent: () => import('./views/layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./views/layout/views/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('./views/layout/views/profile/profile.component').then((m) => m.ProfileComponent),
      },
    ],
  },
];
