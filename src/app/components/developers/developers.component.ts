import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-developers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  developers = [
    { name: 'Aryan Mehta', role: 'Founder & CEO', avatar: 'AM', stack: ['AI/ML', 'Architecture', 'Strategy'], bio: 'Former Google engineer with 15 years building large-scale distributed systems. Leads product vision at Brain Bytes.', github: '#', linkedin: '#', gradient: 'linear-gradient(135deg,#00F5FF,#7C3AED)' },
    { name: 'Priya Sharma', role: 'CTO & Co-Founder', avatar: 'PS', stack: ['Cloud', 'DevOps', 'Security'], bio: 'Ex-AWS architect. Designed infrastructure serving 50M+ users. Obsessed with resilient, self-healing systems.', github: '#', linkedin: '#', gradient: 'linear-gradient(135deg,#7C3AED,#F472B6)' },
    { name: 'Marcus Chen', role: 'Lead AI Engineer', avatar: 'MC', stack: ['PyTorch', 'LLMs', 'MLOps'], bio: 'PhD in Computer Vision from MIT. Published researcher turned builder. Leads our NeuralHub AI platform.', github: '#', linkedin: '#', gradient: 'linear-gradient(135deg,#F472B6,#FBBF24)' },
    { name: 'Zara Ahmed', role: 'Head of Frontend', avatar: 'ZA', stack: ['Angular', 'React', 'Motion'], bio: 'Pixel-obsessed UI engineer who believes every interaction should feel like magic. 10yr design+dev hybrid.', github: '#', linkedin: '#', gradient: 'linear-gradient(135deg,#34D399,#00F5FF)' },
    { name: 'Riku Tanaka', role: 'Backend Architect', avatar: 'RT', stack: ['Rust', 'Go', 'Kafka'], bio: 'Systems-level thinker. Built real-time trading infrastructure for 3 fintech unicorns before joining Brain Bytes.', github: '#', linkedin: '#', gradient: 'linear-gradient(135deg,#60A5FA,#7C3AED)' },
    { name: 'Sofia Rossi', role: 'Product Designer', avatar: 'SR', stack: ['Figma', 'Research', 'Motion'], bio: 'Design lead with background in cognitive psychology. Crafts interfaces that are not just beautiful, but intuitively human.', github: '#', linkedin: '#', gradient: 'linear-gradient(135deg,#FBBF24,#F472B6)' },
    { name: 'James O\'Brien', role: 'Security Lead', avatar: 'JO', stack: ['Pentesting', 'Zero Trust', 'SIEM'], bio: 'Former ethical hacker and CISO advisor. Ensures every Brain Bytes product is battle-tested against modern threats.', github: '#', linkedin: '#', gradient: 'linear-gradient(135deg,#F472B6,#00F5FF)' },
    { name: 'Lena Ivanova', role: 'Data Scientist', avatar: 'LI', stack: ['Python', 'SQL', 'BI'], bio: 'Transforms raw data into strategic decisions. Built predictive models for Fortune 500 retail and logistics companies.', github: '#', linkedin: '#', gradient: 'linear-gradient(135deg,#7C3AED,#34D399)' },
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
