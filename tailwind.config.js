/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'bb-dark': '#08081A',
        'bb-navy': '#0D0D2B',
        'bb-card': '#111130',
        'bb-cyan': '#00F5FF',
        'bb-violet': '#7C3AED',
        'bb-violet-light': '#A78BFA',
        'bb-pink': '#F472B6',
        'bb-gray': '#8892A4',
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)",
        'hero-gradient': "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0,245,255,0.15) 0%, transparent 50%)",
        'cta-gradient': "linear-gradient(135deg, #0D0D2B 0%, #1a0a3d 50%, #0D0D2B 100%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,245,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,245,255,0.8), 0 0 80px rgba(0,245,255,0.3)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 30px rgba(0,245,255,0.4)',
        'violet-glow': '0 0 30px rgba(124,58,237,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.2)',
      }
    },
  },
  plugins: [],
}
