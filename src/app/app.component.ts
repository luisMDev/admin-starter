import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ConfigStore } from '@arcane-auth/ngx-client';

@Component({
  selector: 'admin-starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  readonly #titleService = inject(Title);

  public readonly configStore = inject(ConfigStore);

  constructor() {
    effect(() => {
      if (this.configStore.config()?.PROJECT_NAME) {
        this.#titleService.setTitle(this.configStore.config().PROJECT_NAME);
      }
    });
  }
}
