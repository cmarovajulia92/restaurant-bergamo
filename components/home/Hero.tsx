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
        <a href="https://www.tripadvisor.com/Restaurant_Review-g1137997-d12035717-Reviews-Bergamo_Restaurant-Humenne_Presov_Region.html" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.5c1.24 0 2.4.32 3.4.88L17 5l1.5 1.5-1.4 1.6c.56 1 .9 2.16.9 3.4 0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7zm0 2.5c-2.48 0-4.5 2.02-4.5 4.5S9.52 17 12 17s4.5-2.02 4.5-4.5S14.48 8 12 8zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/>
          </svg>
        </a>
        <a href="https://maps.google.com/?q=Gork%C3%A9ho+1%2C+066+01+Humenn%C3%A9" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
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
