import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  featured = {
    name: 'NeuralHub',
    tagline: 'The All-In-One AI Platform',
    desc: 'NeuralHub is Brain Bytes\'s flagship AI platform — a unified workspace for training, deploying, and monitoring machine learning models at any scale. From edge devices to petabyte-scale cloud clusters, NeuralHub handles the entire MLOps lifecycle.',
    icon: '🧠',
    color: '#00F5FF',
    tag: 'Flagship',
    features: ['AutoML pipeline builder', 'Real-time model monitoring', 'Multi-cloud deployment', 'Explainable AI dashboard', 'One-click A/B model testing'],
    stats: [{ label: 'Models Deployed', value: '10K+' }, { label: 'Avg Latency', value: '4ms' }, { label: 'Uptime SLA', value: '99.99%' }]
  };

  products = [
    {
      name: 'ByteVault',
      category: 'Cloud Storage',
      icon: '☁️',
      color: '#7C3AED',
      tag: 'Popular',
      desc: 'Enterprise encrypted cloud storage with end-to-end encryption, real-time collaboration, and multi-region replication. SOC2 Type II certified.',
      features: ['E2E encryption at rest & transit', 'Real-time collaborative editing', 'Multi-region auto-replication', 'Granular access controls'],
      price: 'From $29/mo'
    },
    {
      name: 'FlowSync',
      category: 'Workflow Automation',
      icon: '⚡',
      color: '#F472B6',
      tag: 'New',
      desc: 'No-code workflow automation built for enterprise. Connect 200+ apps, design visual pipelines, and automate complex multi-step business processes.',
      features: ['200+ native integrations', 'Visual drag-and-drop editor', 'AI-suggested workflows', 'Real-time execution logs'],
      price: 'From $49/mo'
    },
    {
      name: 'DataLens',
      category: 'Business Intelligence',
      icon: '📊',
      color: '#34D399',
      tag: 'Beta',
      desc: 'Transform your raw data into strategic insights. DataLens connects to any data source and generates AI-powered dashboards in minutes.',
      features: ['Natural language queries', 'Predictive forecasting', 'Automated anomaly detection', 'Embeddable dashboard widgets'],
      price: 'From $39/mo'
    },
    {
      name: 'GuardShield',
      category: 'Cybersecurity',
      icon: '🔐',
      color: '#60A5FA',
      tag: 'Enterprise',
      desc: 'Zero-trust security infrastructure for modern enterprises. Continuous threat monitoring, automated incident response, and compliance reporting.',
      features: ['Zero-trust architecture', '24/7 SOC monitoring', 'Automated IR playbooks', 'GDPR / HIPAA compliance kits'],
      price: 'Custom pricing'
    },
    {
      name: 'PulseCDN',
      category: 'Content Delivery',
      icon: '🌐',
      color: '#FBBF24',
      tag: 'Stable',
      desc: 'Ultra-fast global CDN with 280+ PoPs, intelligent routing, and real-time performance analytics. Built for high-traffic media and e-commerce.',
      features: ['280+ global PoPs', 'Smart traffic routing', 'DDoS protection built-in', 'Real-time analytics'],
      price: 'From $19/mo'
    },
  ];

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
