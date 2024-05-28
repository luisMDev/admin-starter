import { Component } from '@angular/core';
import { ArcLoginComponent } from '@arcane-auth/ngx-client';

@Component({
  selector: 'admin-starter-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ArcLoginComponent],
})
export class LoginComponent {}
