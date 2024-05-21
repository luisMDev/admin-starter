import { Component } from '@angular/core';
import { ArcLoginComponent } from '@arcane-auth/ngx-client';
import { ThemeSwitcherComponent } from '@luismdev/ngx-utils/theme-switcher';

@Component({
  selector: 'admin-starter-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ArcLoginComponent, ThemeSwitcherComponent],
})
export class LoginComponent {}
