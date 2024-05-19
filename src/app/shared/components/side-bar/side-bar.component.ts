import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArcAuthService, ArcConfig, ArcUser } from '@arcane-auth/ngx-client';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

interface NavBarItems {
  icon: string;
  name: string;
  routerLink: string;
  active: boolean;
}

@Component({
  selector: 'admin-starter-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
})
export class SideBarComponent implements OnInit {
  public user$: Observable<ArcUser>;

  public config$: Observable<ArcConfig>;

  public mainItems: { title: string; items: NavBarItems[] }[] = [
    {
      title: '',
      items: [
        {
          icon: 'ti ti-home',
          name: 'home',
          routerLink: './home',
          active: true,
        },
      ],
    },
  ];

  public footerItems: NavBarItems[] = [];

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
