import { Component, OnInit, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AppThemeService } from '../../../core/services/app-theme.service';

@Component({
  selector: 'admin-starter-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  standalone: true,
  imports: [FormsModule, RouterModule, TranslateModule, NgbDropdownModule],
})
export class ThemeSwitcherComponent implements OnInit {
  public theme$: WritableSignal<string>;

  constructor(private appThemeService: AppThemeService) {}

  public ngOnInit(): void {
    this.theme$ = this.appThemeService.theme$;
  }

  public toggleTheme(): void {
    this.appThemeService.toggleTheme();
  }
}
