import { ArcConfig, ArcAuthService } from '@arcane-auth/ngx-client';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'admin-starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private arcAuthService: ArcAuthService,
  ) {}

  public ngOnInit(): void {
    this.titleService.setTitle('User Manager Console');
    this.arcAuthService.config$.subscribe((config: ArcConfig) => {
      if (config) {
        this.titleService.setTitle(config.PROJECT_NAME);
      }
    });

    // TODO: Add theme switching
    const body = document.body as HTMLElement;
    body.setAttribute('data-bs-theme', 'light');
  }
}
