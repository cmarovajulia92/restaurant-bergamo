'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { foodMenu, foodCategories } from '@/data/foodMenu';
import ScrollReveal from '@/components/ScrollReveal';

export default function FoodMenu() {
  const [activeFilter, setActiveFilter] = useState('all');
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === 'all'
    ? foodMenu
    : foodMenu.filter(item => item.catKey === activeFilter);

  const handleFilter = useCallback((key: string) => {
    setActiveFilter(key);
  }, []);

  return (
    <section id="food-menu">
      <div className="deco-icons" aria-hidden="true">
        <div className="deco-icon" style={{ right: '-2%', top: '3%', width: '170px', opacity: 0.12, transform: 'rotate(12deg)' }}>
          <Image src="/icons/salad.png" alt="" width={170} height={170} />
        </div>
        <div className="deco-icon" style={{ right: '2%', bottom: '5%', width: '165px', opacity: 0.10, transform: 'rotate(10deg)' }}>
          <Image src="/icons/dinner-2.png" alt="" width={165} height={165} />
        </div>
      </div>

      <div className="container">
        <ScrollReveal className="sec-header">
          <span className="sec-eyebrow">Naša ponuka</span>
          <h2 className="sec-title">Jedálny Lístok</h2>
          <div className="sec-divider" />
          <p className="sec-desc">Čerstvé ingrediencie, tradičné recepty a moderné inšpirácie z celého sveta.</p>
        </ScrollReveal>

        <ScrollReveal className="filter-bar">
          {foodCategories.map(cat => (
            <button
              key={cat.key}
              className={`fpill${activeFilter === cat.key ? ' active' : ''}`}
              onClick={() => handleFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </ScrollReveal>

        <div className="menu-grid" ref={gridRef}>
          {filtered.map(item => (
            <div key={item.id} className="menu-card">
              <div
                className="mc-img"
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              <div className="mc-cat">{item.category}</div>
              <div className="mc-name">{item.name}</div>
              <div className="mc-desc">{item.desc}</div>
              <div className="mc-footer">
                <span className="mc-weight">{item.weight}</span>
                <span className="mc-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
