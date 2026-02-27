import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="kontakt">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <Image src="/logo.png" alt="Restaurant Bergamo" width={140} height={42} />
          </Link>
          <p className="footer-tagline">
            Reštaurácia Bergamo — miesto, kde sa každý deň stretávajú tradícia,
            moderná kuchyňa a pohostinnosť v srdci Humenného.
          </p>
          <div className="footer-social">
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
        </div>

        <div>
          <div className="footer-heading">Kontakt</div>
          <ul className="footer-list">
            <li>
              <strong>Adresa</strong>
              Gorkého 1<br />066 01 Humenné
            </li>
            <li>
              <strong>Telefón</strong>
              <a href="tel:+421577795340">057 / 779 5340</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="footer-heading">Otváracie hodiny</div>
          <ul className="footer-list">
            <li>
              <strong>Pondelok — Piatok</strong>
              10:00 — 21:00
            </li>
            <li>
              <strong>Sobota — Nedeľa</strong>
              Podľa objednávky
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Restaurant Bergamo. Všetky práva vyhradené.</span>
        <span>Humenné, Slovensko</span>
      </div>
    </footer>
  );
}
