import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArcAuthService, ArcConfig, ArcUser } from '@arcane-auth/ngx-client';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { SideBarMenu } from '../../interfaces/side-bar-menu.interface';
import { SideBarMenuModel } from '../../models/side-bar-menu.model';

@Component({
  selector: 'admin-starter-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
})
export class SideBarComponent implements OnInit {
  #arcAuthService = inject(ArcAuthService);

  public user$: Observable<ArcUser>;
  public config$: Observable<ArcConfig>;
  public mainItems: SideBarMenu = SideBarMenuModel;

  public ngOnInit(): void {
    this.user$ = this.#arcAuthService.user$;
    this.config$ = this.#arcAuthService.config$;
  }

  public logout(): void {
    this.#arcAuthService.logout();
    location.reload();
  }
}
