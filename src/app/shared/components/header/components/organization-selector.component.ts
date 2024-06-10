import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArcOrganizationsStore } from '@arcane-auth/ngx-client';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'admin-starter-organization-selector',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, RouterLink],
  templateUrl: './organization-selector.component.html',
})
export class OrganizationSelectorComponent {
  public readonly organizationStore = inject(ArcOrganizationsStore);
}
