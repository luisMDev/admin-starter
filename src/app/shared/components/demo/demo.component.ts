import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserStore } from '@arcane-auth/ngx-client';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  readonly #httpClient = inject(HttpClient);

  public userStore = inject(UserStore);

  public testRoleGuard(): void {
    this.#httpClient.get(`${environment.api.main}/demo/role-guard-test`).subscribe();
  }

  public testPermissionGuard(): void {
    this.#httpClient.get(`${environment.api.main}/demo/permission-guard-test`).subscribe();
  }

  public trackMetric(): void {
    this.#httpClient.get(`${environment.api.main}/demo/track-metric-test`).subscribe((res: any) => {
      console.log(res);
      alert(res.message);
    });
  }
}
