import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year = new Date().getFullYear();

  links = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/developers' },
      { label: 'Portfolio', path: '/gallery' },
      { label: 'Contact', path: '/contact' },
    ],
    products: [
      { label: 'NeuralHub', path: '/products' },
      { label: 'ByteVault', path: '/products' },
      { label: 'FlowSync', path: '/products' },
      { label: 'DataLens', path: '/products' },
      { label: 'PulseCDN', path: '/products' },
    ],
    services: [
      { label: 'AI & ML', path: '/' },
      { label: 'Cloud Architecture', path: '/' },
      { label: 'Web Development', path: '/' },
      { label: 'Mobile Apps', path: '/' },
      { label: 'Cybersecurity', path: '/' },
    ]
  };

  socials = [
    { name: 'Twitter', icon: '𝕏', href: '#' },
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { name: 'GitHub', icon: '⌥', href: '#' },
    { name: 'Dribbble', icon: '✦', href: '#' },
  ];
}
