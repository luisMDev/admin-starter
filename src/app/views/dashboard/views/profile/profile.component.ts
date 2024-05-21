import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ArcProfileComponent } from '@arcane-auth/ngx-client';

@Component({
  selector: 'admin-starter-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [ArcProfileComponent, TranslateModule],
})
export class ProfileComponent {}
