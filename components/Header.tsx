'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TransitionLink from './TransitionLink';
import GiftVoucherButton from './home/GiftVoucherButton';

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [pastHero, setPastHero]   = useState(false);
  const pathname                  = usePathname();
  const isMenuPage                = pathname === '/menu';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Show CTA when hero is no longer visible
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) { setPastHero(true); return; }
    setPastHero(false);
    const obs = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const close = () => setOpen(false);

  const headerClass = [
    isMenuPage ? 'always-dark' : '',
    scrolled   ? 'scrolled'    : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <header id="header" className={headerClass}>
        <TransitionLink
          href="/"
          className="logo"
          onClick={() => {
            close();
            if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image src="/logo.png" alt="Restaurant Bergamo" width={120} height={38} priority />
        </TransitionLink>

        <div className="header-right">
          <Link
            href="/#rezervacia"
            className={`header-cta${pastHero ? ' header-cta--visible' : ''}`}
            onClick={close}
          >
            Rezervovať stôl
          </Link>

          <GiftVoucherButton />

          <button
            className={`hamburger${open ? ' open' : ''}`}
            aria-label="Menu"
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div id="sideBackdrop" className={open ? 'open' : ''} onClick={close} />

      <aside id="sidePanel" className={open ? 'open' : ''}>
        <nav className="side-nav">
          <TransitionLink href="/menu"             className="side-item" onClick={close}>A la carte</TransitionLink>
          <Link           href="/#daily-menu"      className="side-item" onClick={close}>Denné menu</Link>
          <TransitionLink href="/menu#drinks-menu" className="side-item" onClick={close}>Nápoje</TransitionLink>
          <Link           href="/#rezervacia"      className="side-item" onClick={close}>Rezervácia</Link>
          <Link           href="/#kontakt"         className="side-item" onClick={close}>Kontakt</Link>
        </nav>
      </aside>
    </>
  );
}
