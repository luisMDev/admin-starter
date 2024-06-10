import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ArcOrganizationsStore } from '@arcane-auth/ngx-client';
import { DtlSideBarComponent, DtlSideBarItem } from '@dotted-labs/ngx-bootstrap-components/side-bar';
import { SideBarMenuModel } from '../../models/side-bar-menu.model';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'admin-starter-side-bar',
  standalone: true,
  imports: [DtlSideBarComponent, DtlSideBarComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent implements OnInit {
  readonly #router = inject(Router);

  public readonly organizationStore = inject(ArcOrganizationsStore);
  public readonly menu = SideBarMenuModel;

  public currentUrl = signal<string>('');

  public ngOnInit(): void {
    this.currentUrl.set(this.#router.url);
    this.#router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.set(event.url);
      }
    });
  }

  public onNavigate(event: DtlSideBarItem): void {
    void this.#router.navigateByUrl(event.url);
  }
}
