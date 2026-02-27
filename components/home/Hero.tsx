import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-slides">
        <div
          className="hero-slide active"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=85')" }}
        />
      </div>

      <div className="hero-overlay-bottom" />
      <div className="hero-overlay-sides" />

      <div className="hero-content">
        <Image
          src="/logo.png"
          alt="Restaurant Bergamo"
          className="hero-logo-img"
          width={460}
          height={140}
          priority
        />
        <div className="hero-divider" />
        <p className="hero-desc">
          Miesto, kde sa stretávajú tradičné Slovenské chute s Talianskym nádychom.
        </p>
        <div className="hero-btns">
          <Link href="/#rezervacia" className="btn btn-gold">Rezervovať stôl</Link>
          <Link href="/menu" className="btn btn-ghost">A la carte</Link>
        </div>
      </div>

      <div className="hero-social">
        <a href="https://www.facebook.com/p/Re%C5%A1taur%C3%A1cia-Bergamo-100087073762517/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="https://instagram.com/restauraciabergamo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
          </svg>
        </a>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-bar" />
      </div>
    </section>
  );
}
