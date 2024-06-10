import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigStore, UserStore } from '@arcane-auth/ngx-client';
import { TranslateModule } from '@ngx-translate/core';
import { OrganizationSelectorComponent } from './components/organization-selector.component';

@Component({
  selector: 'admin-starter-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, OrganizationSelectorComponent],
})
export class HeaderComponent {
  public readonly userStore = inject(UserStore);
  public readonly configStore = inject(ConfigStore);

  public logout(): void {
    this.userStore.logout();
    location.reload();
  }
}
