import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { DtlSideBarComponent, DtlSideBarItem } from '@dotted-labs/ngx-bootstrap-components/side-bar';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SideBarMenuModel } from '../../shared/models/side-bar-menu.model';

@Component({
  selector: 'admin-starter-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, DtlSideBarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  readonly #router = inject(Router);

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
