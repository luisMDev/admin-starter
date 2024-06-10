import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';

@Component({
  selector: 'admin-starter-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, SideBarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
