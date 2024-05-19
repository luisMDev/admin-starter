import { Component } from '@angular/core';
import { ArcRegisterComponent } from '@arcane-auth/ngx-client';

@Component({
  selector: 'admin-starter-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ArcRegisterComponent],
})
export class RegisterComponent {}
