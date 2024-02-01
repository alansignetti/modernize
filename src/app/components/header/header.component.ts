import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import {
  searchIcon,
  chatIcon,
  notificationIcon,
} from '../../../assets/icons/icons';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatBadgeModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchIcon: SafeHtml;
  chatIcon: SafeHtml;
  notificationIcon: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.searchIcon = this.sanitizeSvg(searchIcon);
    this.chatIcon = this.sanitizeSvg(chatIcon);
    this.notificationIcon = this.sanitizeSvg(notificationIcon);
  }

  sanitizeSvg(svgString: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }
}
