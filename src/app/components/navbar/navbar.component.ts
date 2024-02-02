import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from '../settings/settings.component';
import { MatBadgeModule } from '@angular/material/badge';
import {
  ordersIcon,
  dashboardIcon,
  productsIcon,
  categoriesIcon,
  customersIcon,
  reportsIcon,
  couponsIcon,
  inboxIcon,
  knowledgeIcon,
  updatesIcon,
  personalSettingsIcon,
  globalSettingsIcon,
} from '../../../assets/icons/icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatSidenavModule, MatIcon, CommonModule, MatBadgeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  sidenavSections: any[] = [];
  ordersIcon: SafeHtml;
  dashboardIcon: SafeHtml;
  productsIcon: SafeHtml;
  categoriesIcon: SafeHtml;
  customersIcon: SafeHtml;
  reportsIcon: SafeHtml;
  couponsIcon: SafeHtml;
  inboxIcon: SafeHtml;
  knowledgeIcon: SafeHtml;
  updatesIcon: SafeHtml;
  personalSettingsIcon: SafeHtml;
  globalSettingsIcon: SafeHtml;
  settingsComponent = SettingsComponent;
  currentComponent: any;

  constructor(private sanitizer: DomSanitizer) {
    this.ordersIcon = this.sanitizeSvg(ordersIcon);
    this.dashboardIcon = this.sanitizeSvg(dashboardIcon);
    this.productsIcon = this.sanitizeSvg(productsIcon);
    this.categoriesIcon = this.sanitizeSvg(categoriesIcon);
    this.customersIcon = this.sanitizeSvg(customersIcon);
    this.reportsIcon = this.sanitizeSvg(reportsIcon);
    this.couponsIcon = this.sanitizeSvg(couponsIcon);
    this.inboxIcon = this.sanitizeSvg(inboxIcon);
    this.knowledgeIcon = this.sanitizeSvg(knowledgeIcon);
    this.updatesIcon = this.sanitizeSvg(updatesIcon);
    this.personalSettingsIcon = this.sanitizeSvg(personalSettingsIcon);
    this.globalSettingsIcon = this.sanitizeSvg(globalSettingsIcon);
  }
  public ngOnInit(): void {
    this.currentComponent = this.settingsComponent;
    this.sidenavSections = [
      { icon: this.dashboardIcon, label: 'Dashboard', quantity: 0 },
      { icon: this.ordersIcon, label: 'Orders', quantity: 16 },
      { icon: this.productsIcon, label: 'Products', quantity: 0 },
      { icon: this.categoriesIcon, label: 'Categories', quantity: 0 },
      { icon: this.customersIcon, label: 'Customers', quantity: 0 },
      { icon: this.reportsIcon, label: 'Reports', quantity: 0 },
      { icon: this.couponsIcon, label: 'Coupons', quantity: 0 },
      { icon: this.inboxIcon, label: 'Inbox', quantity: 0 },
      { label: 'Other information', separate: true },
      { icon: this.knowledgeIcon, label: 'Knowledge Base', quantity: 0 },
      { icon: this.updatesIcon, label: 'Product Updates', quantity: 0 },
      { label: 'Settings', separate: true },
      {
        icon: this.personalSettingsIcon,
        label: 'Personal Settings',
        quantity: 0,
      },
      { icon: this.globalSettingsIcon, label: 'Global Settings', quantity: 0 },
    ];
  }

  onSectionClick(section: any): void {
    switch (section.label) {
      case 'Personal Settings':
        this.currentComponent = this.settingsComponent;
        break;
      default:
        this.currentComponent = null;
        break;
    }
  }

  sanitizeSvg(svgString: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }
}
