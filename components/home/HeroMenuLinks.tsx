'use client';

import Link from 'next/link';
import { usePageTransition } from '@/components/PageTransition';

const items = [
  { num: '01', label: 'Jedálny lístok', title: 'A la carte',    href: '/menu',              page: true  },
  { num: '02', label: 'Nápojový lístok', title: 'Nápoje',       href: '/menu#drinks-menu',  page: true  },
  { num: '03', label: 'Denne špeciality', title: 'Denné menu',  href: '/#daily-menu',       page: false },
  { num: '04', label: 'Rezervovať stôl', title: 'Rezervácia',   href: '/#rezervacia',       page: false },
] as const;

export default function HeroMenuLinks() {
  const { navigate } = usePageTransition();

  return (
    <div className="hero-menu-bar">
      {items.map((item) =>
        item.page ? (
          <button
            key={item.num}
            className="hmi"
            onClick={() => navigate(item.href)}
          >
            <span className="hmi-num">{item.num}</span>
            <span className="hmi-label">{item.label}</span>
            <span className="hmi-title">{item.title}</span>
            <span className="hmi-arrow">→</span>
          </button>
        ) : (
          <Link key={item.num} href={item.href} className="hmi">
            <span className="hmi-num">{item.num}</span>
            <span className="hmi-label">{item.label}</span>
            <span className="hmi-title">{item.title}</span>
            <span className="hmi-arrow">→</span>
          </Link>
        )
      )}
    </div>
  );
}
