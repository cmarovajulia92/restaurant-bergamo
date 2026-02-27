'use client';

import { useState } from 'react';
import { drinksMenu, drinkGroups } from '@/data/drinksMenu';
import ScrollReveal from '@/components/ScrollReveal';

export default function DrinksMenu() {
  const [activeGroup, setActiveGroup] = useState(drinkGroups[0].key);

  const currentGroup = drinkGroups.find(g => g.key === activeGroup)!;

  return (
    <section id="drinks-menu">
      <div className="container">
        <ScrollReveal className="sec-header">
          <span className="sec-eyebrow">Nápoje &amp; Alkohol</span>
          <h2 className="sec-title">Nápojový Lístok</h2>
          <div className="sec-divider" />
          <p className="sec-desc">
            Starostlivo vybraná ponuka — od rannej kávy po večernú whisky.
          </p>
        </ScrollReveal>

        <div className="dm-wrap">
          <ScrollReveal className="filter-bar">
            {drinkGroups.map(group => (
              <button
                key={group.key}
                className={`fpill${activeGroup === group.key ? ' active' : ''}`}
                onClick={() => setActiveGroup(group.key)}
              >
                {group.label}
              </button>
            ))}
          </ScrollReveal>

          <div key={activeGroup} className="dm-panel" role="tabpanel">
            {currentGroup.subgroups.map(sub => {
              const items = drinksMenu.filter(d => d.catKey === sub.catKey);
              if (items.length === 0) return null;
              return (
                <div key={sub.catKey} className="dm-subgroup">
                  <div className="dm-subgroup-label">{sub.label}</div>
                  <ul className="dm-list">
                    {items.map(item => (
                      <li key={item.id} className="dm-row">
                        <div className="dm-row-info">
                          <span className="dm-row-name">{item.name}</span>
                          <span className="dm-row-desc">{item.desc}</span>
                        </div>
                        <div className="dm-row-meta">
                          <span className="dm-row-vol">{item.volume}</span>
                          <span className="dm-row-price">{item.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
