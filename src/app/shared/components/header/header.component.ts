import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArcAuthService, ArcConfig, ArcUser } from '@arcane-auth/ngx-client';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ThemeSwitcherComponent } from '@luismdev/ngx-utils/theme-switcher';

@Component({
  selector: 'admin-starter-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, NgbDropdownModule, ThemeSwitcherComponent],
})
export class HeaderComponent implements OnInit {
  public user$: Observable<ArcUser>;

  public config$: Observable<ArcConfig>;

  constructor(private arcAuthService: ArcAuthService) {}

  public ngOnInit(): void {
    this.user$ = this.arcAuthService.user$;
    this.config$ = this.arcAuthService.config$;
  }

  public logout(): void {
    this.arcAuthService.logout();
    location.reload();
  }
}
