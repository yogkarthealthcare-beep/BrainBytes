import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  timeline = [
    { year: '2012', title: 'Founded', desc: 'Brain Bytes was born in a small garage with three developers and one vision: build software that truly matters.' },
    { year: '2015', title: 'First Major Product', desc: 'Launched ByteVault, our cloud storage solution, serving 10,000+ users in the first year.' },
    { year: '2018', title: 'Global Expansion', desc: 'Opened offices in London and Singapore. Team grew to 25 engineers from 8 countries.' },
    { year: '2020', title: 'AI Division Launch', desc: 'Established dedicated AI research division, building NeuralHub — our flagship ML platform.' },
    { year: '2022', title: 'Series B Funding', desc: 'Raised $40M Series B to scale enterprise products and expand our global engineering team.' },
    { year: '2024', title: 'Industry Leader', desc: '150+ projects delivered, 98% client satisfaction, recognized as top software innovator of the year.' },
  ];

  values = [
    { icon: '🎯', title: 'Purpose-Driven', desc: 'Every line of code serves a human need. We build with intention, not just with innovation.' },
    { icon: '🔬', title: 'Research-First', desc: "We invest 20% of our time in R&D - exploring what's next before the world knows it needs it." },
    { icon: '🤝', title: 'Radical Transparency', desc: 'No hidden fees, no black-box processes. We work as true partners, not vendors.' },
    { icon: '🌱', title: 'Sustainable Tech', desc: 'Green hosting, ethical AI, and sustainable engineering practices - built into everything we ship.' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); this.observer.unobserve(e.target); }});
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach(el => this.observer.observe(el));
  }

  ngOnDestroy() { if (this.observer) this.observer.disconnect(); }
}
