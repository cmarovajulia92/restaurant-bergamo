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
