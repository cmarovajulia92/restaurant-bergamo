'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DAILY_MENU, DAY_NAMES, MONTHS } from '@/data/dailyMenu';
import ScrollReveal from '@/components/ScrollReveal';

function getDateForDow(todayDow: number, todayDate: Date, targetDow: number) {
  const d = new Date(todayDate);
  d.setDate(d.getDate() + (targetDow - todayDow));
  return d;
}

export default function DailyMenu() {
  const today = new Date();
  const todayDow = today.getDay();
  const [currentDow, setCurrentDow] = useState(todayDow);

  const prev = () => setCurrentDow(d => (d + 6) % 7);
  const next = () => setCurrentDow(d => (d + 1) % 7);

  const d = getDateForDow(todayDow, today, currentDow);
  const dateStr = `${d.getDate()}. ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  const data = DAILY_MENU[currentDow];

  return (
    <section id="daily-menu">
      <div className="deco-icons" aria-hidden="true">
        <div className="deco-icon" style={{ right: '2%', top: '4%', width: '160px', opacity: 0.12, transform: 'rotate(8deg)' }}>
          <Image src="/icons/dinner-2.png" style={{ filter: 'invert(1)' }} alt="" width={160} height={160} />
        </div>
      </div>

      <div className="container">
        <ScrollReveal className="sec-header">
          <span className="sec-eyebrow">Každý deň čerstvé</span>
          <h2 className="sec-title sec-title-light">Denné Menu</h2>
          <div className="sec-divider" />
          <p className="sec-desc sec-desc-light">
            Polievka a výber hlavných jedál pripravovaných denne z čerstvých surovín.
          </p>
        </ScrollReveal>

        <ScrollReveal className="daily-nav">
          <button className="daily-nav-arrow" onClick={prev} aria-label="Predchádzajúci deň">&#8592;</button>
          <div className="daily-nav-center">
            <span className="daily-nav-day">{DAY_NAMES[currentDow]}</span>
            <span className="daily-nav-date">{dateStr}</span>
            {currentDow === todayDow && (
              <span className="daily-today-badge">Dnes</span>
            )}
          </div>
          <button className="daily-nav-arrow" onClick={next} aria-label="Nasledujúci deň">&#8594;</button>
        </ScrollReveal>

        <div id="dailyContent">
          {!data ? (
            <div className="daily-closed">
              <div className="daily-closed-title">Víkendové menu</div>
              <p className="daily-closed-desc">
                Cez víkend varíme výhradne na osobitné objednávky.<br />
                Kontaktujte nás vopred a radi vám pripravíme špeciálne menu.
              </p>
              <a href="tel:+421577795340" className="daily-closed-phone">057&nbsp;/&nbsp;779&nbsp;5340</a>
            </div>
          ) : (
            <div className="daily-layout">
              <div className="daily-card">
                <span className="dc-label">Polievka</span>
                <div className="dc-name">{data.soup.name}</div>
                <div className="dc-desc">{data.soup.desc}</div>
                <div className="dc-price">{data.soup.price}</div>
              </div>
              <div className="daily-col-right">
                {data.mains.map((m, i) => (
                  <div key={i} className="daily-card">
                    <span className="dc-label">{m.label}</span>
                    <div className="dc-name">{m.name}</div>
                    <div className="dc-desc">{m.desc}</div>
                    <div className="dc-price">{m.price}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
