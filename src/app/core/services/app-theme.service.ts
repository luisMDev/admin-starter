import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  public theme$: BehaviorSubject<string> = new BehaviorSubject<string>('light');

  constructor() {
    const initialTheme = this.getInitialTheme();
    this.setTheme(initialTheme);
  }

  public toggleTheme(): void {
    const newTheme = this.theme$.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  public setTheme(theme: string): void {
    this.theme$.next(theme);
    const body = document.body as HTMLElement;
    body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }

  private getInitialTheme(): string {
    const theme = localStorage.getItem('theme');
    return theme || 'light';
  }
}
