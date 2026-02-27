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

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-bar" />
      </div>
    </section>
  );
}
