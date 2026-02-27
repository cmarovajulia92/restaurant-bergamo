'use client';

import { useState, FormEvent } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Reservations() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSuccess(true);
      setSubmitting(false);
    }, 1100);
  };

  return (
    <section id="rezervacia">
      <div className="container">
        <ScrollReveal className="sec-header">
          <span className="sec-eyebrow">Vaša návšteva</span>
          <h2 className="sec-title">Rezervovať Stôl</h2>
          <div className="sec-divider" />
          <p className="sec-desc">
            Zarezervujte si stôl jednoducho online alebo nás kontaktujte telefonicky.
          </p>
        </ScrollReveal>

        <ScrollReveal className="form-wrap">
          <form id="resForm" noValidate onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Celé meno</label>
              <input type="text" id="name" name="name" placeholder="Ján Novák" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Dátum</label>
                <input type="date" id="date" name="date" min={today} required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Čas</label>
                <input type="time" id="time" name="time" min="10:00" max="21:00" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="guests">Počet hostí</label>
              <select id="guests" name="guests" required>
                <option value="">Vyberte počet osôb</option>
                <option value="1">1 osoba</option>
                <option value="2">2 osoby</option>
                <option value="3">3 osoby</option>
                <option value="4">4 osoby</option>
                <option value="5">5 osôb</option>
                <option value="6">6 osôb</option>
                <option value="7+">7+ osôb (väčšia skupina)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="note">
                Poznámka{' '}
                <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(nepovinné)</span>
              </label>
              <input
                type="text"
                id="note"
                name="note"
                placeholder="Alergie, špeciálne požiadavky, narodeninová oslava…"
              />
            </div>
            <button
              type="submit"
              className="btn btn-navy"
              id="submitBtn"
              disabled={submitting || success}
              style={success ? { background: '#2a6b4a', opacity: 1 } : submitting ? { opacity: 0.7 } : {}}
            >
              {success ? 'Rezervácia odoslaná ✓' : submitting ? 'Odosielam…' : 'Odoslať rezerváciu'}
            </button>
            <div className={`success-bar${success ? ' visible' : ''}`}>
              Ďakujeme! Vaša rezervácia bola úspešne odoslaná.<br />
              Čoskoro vás budeme kontaktovať na potvrdenie.
            </div>
          </form>
          <p className="form-note">
            Alebo nás kontaktujte priamo:<br />
            <strong>057 / 779 5340</strong> &ensp;·&ensp; Gorkého 1, Humenné
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
