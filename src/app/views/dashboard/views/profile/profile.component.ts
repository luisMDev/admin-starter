import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ArcProfileComponent } from '@arcane-auth/ngx-client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'admin-starter-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, ArcProfileComponent, TranslateModule],
})
export class ProfileComponent {}
