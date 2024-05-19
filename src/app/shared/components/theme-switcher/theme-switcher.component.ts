import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AppThemeService } from '../../../core/services/app-theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'admin-starter-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule, NgbDropdownModule],
})
export class ThemeSwitcherComponent implements OnInit {
  public theme$: Observable<string>;

  constructor(private appThemeService: AppThemeService) {}

  public ngOnInit(): void {
    this.theme$ = this.appThemeService.theme$;
  }

  public toggleTheme(): void {
    this.appThemeService.toggleTheme();
  }
}
