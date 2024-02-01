import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
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
  imports: [MatSidenavModule, MatIcon, CommonModule],
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
    this.sidenavSections = [
      { icon: this.dashboardIcon, label: 'Dashboard' },
      { icon: this.ordersIcon, label: 'Orders' },
      { icon: this.productsIcon, label: 'Products' },
      { icon: this.categoriesIcon, label: 'Categories' },
      { icon: this.customersIcon, label: 'Customers' },
      { icon: this.reportsIcon, label: 'Reports' },
      { icon: this.couponsIcon, label: 'Coupons' },
      { icon: this.inboxIcon, label: 'Inbox' },
      { label: 'Other information', separate: true },
      { icon: this.knowledgeIcon, label: 'Knowledge Base' },
      { icon: this.updatesIcon, label: 'Product Updates' },
      { label: 'Settings', separate: true },
      { icon: this.personalSettingsIcon, label: 'Personal Settings' },
      { icon: this.globalSettingsIcon, label: 'Global Settings' },
    ];
  }

  sanitizeSvg(svgString: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }
}
