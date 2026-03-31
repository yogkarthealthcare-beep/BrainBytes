import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileOpen = false;

  navLinks = [
    { label: 'Home',       path: '/' },
    { label: 'About',      path: '/about' },
    { label: 'Products',   path: '/products' },
    { label: 'Developers', path: '/developers' },
    { label: 'Gallery',    path: '/gallery' },
    { label: 'Contact',    path: '/contact' },
  ];

  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMobile() {
    this.isMobileOpen = !this.isMobileOpen;
  }

  closeMobile() {
    this.isMobileOpen = false;
  }
}
