import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  formData = { name: '', email: '', company: '', budget: '', service: '', message: '' };
  submitted = false;

  services = ['AI & Machine Learning', 'Cloud Architecture', 'Web Development', 'Mobile Development', 'Cybersecurity', 'Data Analytics', 'Custom Enterprise Solution'];
  budgets = ['< $10K', '$10K–$50K', '$50K–$200K', '$200K+', 'Let\'s discuss'];

  contactInfo = [
    { icon: '📧', label: 'Email', value: 'hello@brainbytes.io', link: 'mailto:hello@brainbytes.io' },
    { icon: '📞', label: 'Phone', value: '+1 (555) 900-BYTE', link: 'tel:+15559002983' },
    { icon: '📍', label: 'HQ', value: 'San Francisco, CA · London, UK', link: '#' },
    { icon: '⏰', label: 'Response', value: 'Within 24 hours — guaranteed', link: '#' },
  ];

  onSubmit() { this.submitted = true; }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); this.observer.unobserve(e.target); }});
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-reveal]').forEach(el => this.observer.observe(el));
  }

  ngOnDestroy() { if (this.observer) this.observer.disconnect(); }
}
