import { Component } from '@angular/core';
import { ArcLoginAdminComponent } from '@arcane-auth/ngx-client';
import { ThemeSwitcherComponent } from '../../../../shared/components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'admin-starter-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ArcLoginAdminComponent, ThemeSwitcherComponent],
})
export class LoginComponent {}
