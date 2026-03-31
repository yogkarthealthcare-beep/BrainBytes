import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  activeFilter = 'All';
  filters = ['All', 'Web App', 'Mobile', 'AI', 'Cloud', 'Dashboard'];

  allProjects = [
    { title: 'FinEdge Dashboard', client: 'FinEdge Corp', category: 'Dashboard', year: '2024', color: '#00F5FF', icon: '📊', desc: 'Real-time trading analytics dashboard with AI-driven signals and multi-portfolio management.', tags: ['React', 'Python', 'WebSocket'] },
    { title: 'MedVault Platform', client: 'HealthPlus', category: 'Web App', year: '2024', color: '#34D399', icon: '🏥', desc: 'HIPAA-compliant patient data management platform serving 200+ hospitals across 5 countries.', tags: ['Angular', 'Node.js', 'PostgreSQL'] },
    { title: 'ShopAI Assistant', client: 'RetailNova', category: 'AI', year: '2023', color: '#7C3AED', icon: '🤖', desc: 'Conversational AI shopping assistant with personalized recommendations and inventory intelligence.', tags: ['GPT-4', 'FastAPI', 'Redis'] },
    { title: 'CloudMap Mobile', client: 'LogiFleet', category: 'Mobile', year: '2023', color: '#F472B6', icon: '📱', desc: 'Real-time fleet tracking mobile app with route optimization and driver performance analytics.', tags: ['Flutter', 'Go', 'PostgreSQL'] },
    { title: 'SkyBuild CMS', client: 'MediaPeak', category: 'Web App', year: '2023', color: '#FBBF24', icon: '🌐', desc: 'Headless CMS powering 50+ media brands with multi-language support and CDN-first delivery.', tags: ['Next.js', 'Contentful', 'CloudFront'] },
    { title: 'NeuralScan Vision', client: 'OptiLabs', category: 'AI', year: '2024', color: '#60A5FA', icon: '👁️', desc: 'Computer vision quality-control system reducing manufacturing defects by 94% in production.', tags: ['PyTorch', 'OpenCV', 'Edge AI'] },
    { title: 'DataPulse Analytics', client: 'InsightCo', category: 'Dashboard', year: '2022', color: '#A78BFA', icon: '⚡', desc: 'Embedded BI platform processing 2M+ events/day with sub-second query response on petabyte data.', tags: ['ClickHouse', 'D3.js', 'Spark'] },
    { title: 'SecureVPN Enterprise', client: 'CyberEdge', category: 'Cloud', year: '2023', color: '#34D399', icon: '🔐', desc: 'Zero-trust VPN infrastructure for 10,000 seat enterprise with hardware-key MFA and SIEM integration.', tags: ['WireGuard', 'Rust', 'Terraform'] },
    { title: 'EduLeap Mobile', client: 'LearnNow', category: 'Mobile', year: '2024', color: '#F472B6', icon: '🎓', desc: 'Adaptive e-learning app with spaced-repetition engine, offline sync, and live tutor video sessions.', tags: ['React Native', 'WebRTC', 'Firebase'] },
  ];

  clients = [
    { name: 'FinEdge Corp', industry: 'Fintech', projects: 3, icon: '🏦' },
    { name: 'HealthPlus', industry: 'Healthcare', projects: 2, icon: '🏥' },
    { name: 'RetailNova', industry: 'E-commerce', projects: 4, icon: '🛍️' },
    { name: 'MediaPeak', industry: 'Media', projects: 2, icon: '📺' },
    { name: 'LogiFleet', industry: 'Logistics', projects: 3, icon: '🚛' },
    { name: 'CyberEdge', industry: 'Security', projects: 2, icon: '🔒' },
  ];

  get filteredProjects() {
    if (this.activeFilter === 'All') return this.allProjects;
    return this.allProjects.filter(p => p.category === this.activeFilter);
  }

  setFilter(f: string) { this.activeFilter = f; }

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
