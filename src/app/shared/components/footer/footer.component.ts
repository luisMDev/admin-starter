import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ArcAuthService, ArcConfig } from '@arcane-auth/ngx-client';
import { Observable } from 'rxjs';
import { environment } from './../../../../../environments/environment';

@Component({
  selector: 'admin-starter-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [CommonModule, TranslateModule],
})
export class FooterComponent implements OnInit {
  public version: string = environment.version;

  public config$: Observable<ArcConfig>;

  public year: number = new Date().getFullYear();

  constructor(private arcAuthService: ArcAuthService) {}

  public ngOnInit(): void {
    this.config$ = this.arcAuthService.config$;
  }
}
