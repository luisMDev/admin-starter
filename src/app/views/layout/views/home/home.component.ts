import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DemoComponent } from '../../../../shared/components/demo/demo.component';

@Component({
  selector: 'admin-starter-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [TranslateModule, DemoComponent],
  standalone: true,
})
export class HomeComponent {}
