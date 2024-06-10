import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from './../../../../../environments/environment';
import { ConfigStore } from '@arcane-auth/ngx-client';

@Component({
  selector: 'admin-starter-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [CommonModule, TranslateModule],
})
export class FooterComponent {
  public readonly configStore = inject(ConfigStore);

  public version: string = environment.version;
  public year: number = new Date().getFullYear();
}
