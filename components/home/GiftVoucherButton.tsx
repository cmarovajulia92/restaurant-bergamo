'use client';

import { useState } from 'react';

function buildMailto(amount: 50 | 100) {
  const subject = `Objednávka darčekovej poukážky – ${amount} €`;
  const body = [
    'Dobrý deň,',
    '',
    `rád/rada by som si objednal/a darčekovú poukážku na večeru`,
    `v hodnote ${amount} € pre Reštauráciu Bergamo.`,
    '',
    'Prosím o informácie ohľadom:',
    '  • spôsobu úhrady',
    '  • možnosti prevzatia alebo doručenia poukážky',
    '  • platnosti poukážky',
    '',
    'Ďakujem za skorú odpoveď.',
    '',
    'S pozdravom,',
    '[Vaše meno]',
    '[Telefónny kontakt]',
  ].join('\n');
  return `mailto:info@bergamo.sk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function GiftVoucherButton() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<50 | 100 | null>(null);

  return (
    <>
      <button className="gift-btn" onClick={() => setOpen(true)} aria-label="Darčeková poukážka">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect x="2" y="7" width="20" height="5" />
          <line x1="12" y1="22" x2="12" y2="7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      </button>

      {open && (
        <div className="gv-backdrop" onClick={() => { setOpen(false); setSelected(null); }}>
          <div className="gv-modal" onClick={e => e.stopPropagation()}>
            <button className="gv-close" onClick={() => { setOpen(false); setSelected(null); }} aria-label="Zavrieť">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="gv-eyebrow">Darčeková poukážka</div>
            <h2 className="gv-title">Darujte zážitok</h2>
            <p className="gv-desc">Obdarujte svojich blízkych nezabudnuteľnou večerou v Reštaurácii Bergamo.</p>

            <div className="gv-options">
              {([50, 100] as const).map(val => (
                <button
                  key={val}
                  className={`gv-option${selected === val ? ' gv-option--active' : ''}`}
                  onClick={() => setSelected(val)}
                >
                  <div className="gv-option-ribbon">Večera pre dvoch</div>
                  <div className="gv-option-amount">{val} €</div>
                  <div className="gv-option-label">Poukážka na konzumáciu</div>
                </button>
              ))}
            </div>

            <a
              href={selected ? buildMailto(selected) : undefined}
              className={`gv-cta${selected ? ' gv-cta--active' : ''}`}
              onClick={e => { if (!selected) e.preventDefault(); }}
            >
              {selected ? `Objednať poukážku za ${selected} €` : 'Vyberte hodnotu poukážky'}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
