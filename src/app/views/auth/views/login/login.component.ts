import { Component } from '@angular/core';
import { ArcLoginComponent } from '@arcane-auth/ngx-client';
import { ThemeSwitcherComponent } from '../../../../shared/components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'admin-starter-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ArcLoginComponent, ThemeSwitcherComponent],
})
export class LoginComponent {}
