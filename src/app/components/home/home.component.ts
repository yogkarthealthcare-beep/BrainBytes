import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private animFrameId: number = 0;
  private observer!: IntersectionObserver;
  private counterObserver!: IntersectionObserver;
  private particles: Particle[] = [];
  private isBrowser: boolean;

  heroVisible = false;

  services = [
    { icon: '🧠', title: 'AI & Machine Learning', desc: 'Custom ML pipelines and intelligent systems that learn, adapt, and scale with your business needs.', color: '#00F5FF', bg: 'rgba(0,245,255,0.1)' },
    { icon: '🚀', title: 'Cloud Architecture', desc: 'Resilient, auto-scaling cloud infrastructure designed for high-traffic global applications.', color: '#7C3AED', bg: 'rgba(124,58,237,0.1)' },
    { icon: '📱', title: 'Mobile Development', desc: 'Pixel-perfect iOS & Android experiences with smooth animations and native performance.', color: '#F472B6', bg: 'rgba(244,114,182,0.1)' },
    { icon: '🔐', title: 'Cybersecurity', desc: 'End-to-end security audits, penetration testing, and zero-trust architecture implementation.', color: '#34D399', bg: 'rgba(52,211,153,0.1)' },
    { icon: '⚡', title: 'Web Engineering', desc: 'Blazing-fast progressive web apps built with modern frameworks and optimised for Core Web Vitals.', color: '#FBBF24', bg: 'rgba(251,191,36,0.1)' },
    { icon: '📊', title: 'Data Analytics', desc: 'Real-time dashboards, business intelligence, and predictive analytics that turn data into insight.', color: '#60A5FA', bg: 'rgba(96,165,250,0.1)' },
  ];

  stats = [
    { value: 150, suffix: '+', label: 'Projects Delivered', icon: '🏆', counted: false, display: '0' },
    { value: 98,  suffix: '%', label: 'Client Satisfaction', icon: '⭐', counted: false, display: '0' },
    { value: 12,  suffix: '+', label: 'Years Experience', icon: '📅', counted: false, display: '0' },
    { value: 40,  suffix: '+', label: 'Team Members', icon: '👥', counted: false, display: '0' },
  ];

  products = [
    { name: 'NeuralHub', category: 'AI Platform', desc: 'Centralized ML model management and deployment platform.', color: '#00F5FF', icon: '🧠', tag: 'Featured' },
    { name: 'ByteVault', category: 'Cloud Storage', desc: 'Encrypted cloud storage with real-time collaboration features.', color: '#7C3AED', icon: '☁️', tag: 'Popular' },
    { name: 'FlowSync', category: 'Automation', desc: 'No-code workflow automation for enterprise operations.', color: '#F472B6', icon: '⚡', tag: 'New' },
    { name: 'DataLens', category: 'Analytics', desc: 'Predictive analytics dashboards with AI-generated insights.', color: '#34D399', icon: '📊', tag: 'Beta' },
  ];

  clients = [
    'TechNova', 'CloudPeak', 'DataSync', 'NexGen', 'PulseAI', 'StackFlow',
    'ByteCore', 'QuantumX', 'AeroNet', 'InfoLabs', 'CyberEdge', 'DeepMind Co.',
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (!this.isBrowser) return;

    setTimeout(() => { this.heroVisible = true; }, 100);
    this.initParticles();
    this.initScrollReveal();
    this.initCounterObserver();
  }

  ngOnDestroy() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    if (this.observer) this.observer.disconnect();
    if (this.counterObserver) this.counterObserver.disconnect();
  }

  // ── Particle System ──────────────────────────────────────────
  private initParticles() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = Math.min(80, Math.floor(window.innerWidth / 14));
    this.particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });
      // Draw connections
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,245,255,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(this.particles[i].x, this.particles[i].y);
            ctx.lineTo(this.particles[j].x, this.particles[j].y);
            ctx.stroke();
          }
        }
      }
      this.animFrameId = requestAnimationFrame(animate);
    };
    animate();
  }

  // ── Scroll Reveal ─────────────────────────────────────────────
  private initScrollReveal() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          this.observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-reveal]').forEach(el => this.observer.observe(el));
  }

  // ── Animated Counters ─────────────────────────────────────────
  private initCounterObserver() {
    this.counterObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = parseInt((e.target as HTMLElement).dataset['statIdx'] || '0');
          this.animateCounter(idx);
          this.counterObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    setTimeout(() => {
      document.querySelectorAll('[data-stat-idx]').forEach(el => this.counterObserver.observe(el));
    }, 300);
  }

  private animateCounter(idx: number) {
    const stat = this.stats[idx];
    if (stat.counted) return;
    stat.counted = true;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      stat.display = Math.floor(eased * stat.value).toString();
      if (progress < 1) requestAnimationFrame(tick);
      else stat.display = stat.value.toString();
    };
    requestAnimationFrame(tick);
  }
}

// ── Particle Class ────────────────────────────────────────────
class Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  color: string;

  private colors = ['#00F5FF', '#7C3AED', '#A78BFA', '#F472B6'];

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.size = Math.random() * 2.5 + 0.5;
    this.opacity = Math.random() * 0.6 + 0.2;
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
    ctx.fill();
  }
}
