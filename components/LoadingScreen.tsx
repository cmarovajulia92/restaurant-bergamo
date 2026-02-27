'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useLayoutEffect(() => {
    if (sessionStorage.getItem('loader_seen')) {
      setHidden(true);
    }
  }, []);

  useEffect(() => {
    if (hidden) return;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      document.body.style.overflow = '';
      sessionStorage.setItem('loader_seen', '1');
      setHidden(true);
    }, 5600);
    return () => clearTimeout(t);
  }, [hidden]);

  if (hidden) return null;

  return (
    <div id="loader">
      <div className="ld-bg" />
      <div className="ld-content">
        <svg className="ld-orn" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#C4A35A" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#C4A35A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="150" cy="150" r="68" fill="url(#ldGlow)" />
          <circle cx="150" cy="150" r="133" fill="none" stroke="#C4A35A" strokeWidth="0.6" opacity="0.35" />

          <g className="orn-cw1">
            {Array.from({ length: 16 }, (_, i) => (
              <circle key={i} cx="150" cy="27" r="2.5" fill="#C4A35A" transform={i > 0 ? `rotate(${i * 22.5},150,150)` : undefined} />
            ))}
          </g>

          <circle cx="150" cy="150" r="110" fill="none" stroke="#C4A35A" strokeWidth="0.5" strokeDasharray="3 8" opacity="0.28" />

          <g className="orn-ccw1">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <polygon key={i} points="150,47 156,53 150,59 144,53" fill="#C4A35A" opacity="0.85" transform={deg > 0 ? `rotate(${deg},150,150)` : undefined} />
            ))}
          </g>

          <circle className="ld-draw" cx="150" cy="150" r="80" fill="none" stroke="#C4A35A" strokeWidth="1" opacity="0.65" />

          <g className="orn-sweep">
            <line x1="150" y1="150" x2="150" y2="17" stroke="#C4A35A" strokeWidth="1.4" strokeOpacity="0.5" />
            <line x1="150" y1="150" x2="150" y2="17" stroke="#C4A35A" strokeWidth="0.9" strokeOpacity="0.2" transform="rotate(-9,150,150)" />
            <line x1="150" y1="150" x2="150" y2="17" stroke="#C4A35A" strokeWidth="0.5" strokeOpacity="0.08" transform="rotate(-18,150,150)" />
          </g>

          <g className="orn-cw2">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
              <line
                key={i}
                x1="150" y1={i % 2 === 0 ? '72' : '76'} x2="150" y2="82"
                stroke="#C4A35A"
                strokeWidth={i % 2 === 0 ? '1.6' : '0.8'}
                opacity={i % 2 === 0 ? '0.9' : '0.5'}
                transform={deg > 0 ? `rotate(${deg},150,150)` : undefined}
              />
            ))}
          </g>
        </svg>

        <div className="ld-logo-wrap">
          <div className="ld-glow" />
          <Image className="ld-logo" src="/logo.png" alt="Bergamo" width={260} height={80} priority />
        </div>
      </div>
    </div>
  );
}
