import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { EmptyMessageComponent } from '../empty-message/empty-message.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatTabsModule,
    MatSelectModule,
    MatOptionModule,
    EmptyMessageComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {}
