import { Component } from '@angular/core';
import { ArcRecoverComponent } from '@arcane-auth/ngx-client';

@Component({
  selector: 'admin-starter-recover',
  templateUrl: './recover.component.html',
  standalone: true,
  imports: [ArcRecoverComponent],
})
export class RecoverComponent {}
